# Activar el envío real del formulario

El formulario de `/contact` intenta enviar por `POST /api/contact` (función
serverless en `api/contact.js`). Si la función no está configurada o falla,
cae automáticamente al `mailto:` de siempre — nunca se pierde la consulta.

## Pasos (5 minutos)

1. Crear cuenta gratis en https://resend.com (100 emails/día en el plan free).
2. En Resend → API Keys → crear una key.
3. En Vercel → Settings del proyecto → Environment Variables → agregar:
   - `RESEND_API_KEY` = la key (Production).
   - Opcional: `CONTACT_TO` (default: ronycozzi5@gmail.com).
   - Opcional: `CONTACT_FROM` (default: `Portfolio <onboarding@resend.dev>`;
     si verificás tu dominio en Resend podés usar `Rony <hola@tudominio.com>`).
4. Redeploy. Probar el form: debería mostrar "Recibí tu consulta…" sin abrir
   el cliente de correo, y el mail llega con reply-to del interesado.

## Qué incluye la función

- Validación de nombre/email/mensaje (los mismos límites que el form).
- Honeypot (`website`): los bots que lo completan reciben un 200 falso.
- Rate limit blando: 5 envíos / 10 min por IP por instancia.
- Chequeo de Origin same-site.
- Sin API key responde 501 → el frontend usa mailto.

## Test local del handler (sin red)

```bash
node tools/test-contact.mjs
```
