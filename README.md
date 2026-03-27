# Portfolio (Vite + React)

This is a personal portfolio web app built with React, Vite, Tailwind CSS, and a macOS-style window UI.

## Run locally

```bash
npm install
npm run dev
```

## Contact form email delivery

The contact form sends data to a serverless API endpoint (`/api/contact`) and then to your inbox through Resend.

Required environment variables:

- `RESEND_API_KEY` (from Resend dashboard)
- `CONTACT_TO_EMAIL` (set to `sriramnerella435@gmail.com`)
- `CONTACT_FROM_EMAIL` (sender email, for example `onboarding@resend.dev` while testing)

## Deploy on Vercel (recommended)

1. Push this project to GitHub.
2. In Vercel, click **Add New Project** and import your repo.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add environment variables in Vercel Project Settings:
	- `RESEND_API_KEY`
	- `CONTACT_TO_EMAIL=sriramnerella435@gmail.com`
	- `CONTACT_FROM_EMAIL`
7. Deploy.
8. Open your deployed site and submit the Contact form to verify email delivery.

## Local API testing note

The `/api/contact` route is a Vercel Serverless Function. To test API routes locally exactly like production, use:

```bash
npx vercel dev
```
