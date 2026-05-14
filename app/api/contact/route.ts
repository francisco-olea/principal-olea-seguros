import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const EMAIL_FROM = process.env.HOSTINGER_EMAIL
const EMAIL_TO = process.env.HOSTINGER_EMAIL_TO ?? process.env.HOSTINGER_EMAIL
const EMAIL_PASSWORD = process.env.HOSTINGER_EMAIL_PASSWORD
const SMTP_HOST = process.env.HOSTINGER_SMTP_HOST ?? 'smtp.hostinger.com'
const SMTP_PORT = Number(process.env.HOSTINGER_SMTP_PORT ?? '587')

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PASSWORD,
  },
})

function validatePayload(payload: any) {
  return (
    payload &&
    typeof payload.name === 'string' &&
    payload.name.trim().length > 0 &&
    typeof payload.email === 'string' &&
    payload.email.trim().length > 0 &&
    typeof payload.phone === 'string' &&
    payload.phone.trim().length > 0 &&
    typeof payload.message === 'string' &&
    payload.message.trim().length > 0
  )
}

export async function POST(request: Request) {
  if (!EMAIL_FROM || !EMAIL_PASSWORD) {
    return NextResponse.json({ error: 'Email configuration no válida.' }, { status: 500 })
  }

  const body = await request.json().catch(() => null)

  if (!validatePayload(body)) {
    return NextResponse.json({ error: 'Por favor completa todos los campos obligatorios correctamente.' }, { status: 400 })
  }

  const product = body.product ? `Producto de interés: ${body.product}` : 'Producto de interés: No especificado'
  const html = `
    <p>Has recibido un nuevo mensaje desde el formulario de contacto:</p>
    <ul>
      <li><strong>Nombre:</strong> ${body.name}</li>
      <li><strong>Correo:</strong> ${body.email}</li>
      <li><strong>Teléfono:</strong> ${body.phone}</li>
      <li><strong>${product}</strong></li>
    </ul>
    <p><strong>Mensaje:</strong></p>
    <p>${body.message.replace(/\n/g, '<br />')}</p>
  `

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Solicitud de contacto — ${body.name}`,
      replyTo: body.email,
      text: `${body.name} (${body.email}, ${body.phone}) ha enviado un mensaje. ${product}. Mensaje: ${body.message}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json({ error: 'No se pudo enviar el mensaje. Intenta nuevamente más tarde.' }, { status: 500 })
  }
}
