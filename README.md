# Metagize Solutions LLP

Premium corporate website built with Next.js, TypeScript and a Resend-backed contact endpoint.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the Resend settings below.
4. Run `npm run dev`, then open `http://localhost:3000`.

## Email delivery

Create a Resend account, verify a sending domain, and set the following values in `.env.local`:

```text
RESEND_API_KEY=re_...
CONTACT_FROM="Metagize Website <enquiries@your-verified-domain.com>"
```

The form sends to `sales@metagizesolutions.com`, sets the visitor's email as Reply-To, validates incoming data, includes a hidden bot field, and applies a lightweight per-IP, one-minute rate limit. Before production, replace the in-memory rate limiter with a shared store such as Upstash Redis for reliable multi-instance protection.

## Deploy

Deploy to Vercel or any Node-compatible host. Add the two environment variables in the hosting provider's settings, ensure the sender domain is verified in Resend, then deploy. A test enquiry should return the success state only after Resend accepts it.

## Assets

- `public/assets/metagize-logo.png` — supplied brand logo, retained without modification.
- `public/assets/hero-architecture.png` — original custom-generated hero image.
