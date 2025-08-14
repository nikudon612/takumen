// src/routes/api/newsletter/+server.ts
import type { RequestHandler } from './$types';
import crypto from 'crypto';
import { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_OPT_IN_STATUS } from '$env/static/private';

const API_KEY = MAILCHIMP_API_KEY;
const AUDIENCE_ID = MAILCHIMP_AUDIENCE_ID;
const DC = API_KEY?.split('-')[1] || 'us15';
const DEFAULT_STATUS = (MAILCHIMP_OPT_IN_STATUS || 'subscribed') as 'subscribed' | 'pending';

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const md5Lower = (s: string) => crypto.createHash('md5').update(s.toLowerCase()).digest('hex');

export const POST: RequestHandler = async ({ request }) => {
  const { email, website } = await request.json().catch(() => ({}));

  // Honeypot: pretend success
  if (website) {
    return new Response(JSON.stringify({ ok: true, message: 'Thanks — you’re subscribed!' }), {
      status: 200, headers: { 'content-type': 'application/json' }
    });
  }

  if (!email) {
    return new Response(JSON.stringify({ ok: false, message: 'Missing email in request.' }), {
      status: 400, headers: { 'content-type': 'application/json' }
    });
  }
  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ ok: false, message: 'Email looks invalid.' }), {
      status: 400, headers: { 'content-type': 'application/json' }
    });
  }
  if (!API_KEY) {
    return new Response(JSON.stringify({ ok: false, message: 'MAILCHIMP_API_KEY not set.' }), {
      status: 400, headers: { 'content-type': 'application/json' }
    });
  }
  if (!AUDIENCE_ID) {
    return new Response(JSON.stringify({ ok: false, message: 'MAILCHIMP_AUDIENCE_ID not set.' }), {
      status: 400, headers: { 'content-type': 'application/json' }
    });
  }

  const memberHash = md5Lower(email);
  const endpoint = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${memberHash}`;
  const auth = 'Basic ' + Buffer.from(`anystring:${API_KEY}`).toString('base64');

  const payload = { email_address: email, status_if_new: 'subscribed', status: 'subscribed' };

  const mcRes = await fetch(endpoint, {
    method: 'PUT',
    headers: { Authorization: auth, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const body: any = await mcRes.json().catch(() => ({}));
  if (!mcRes.ok) {
    return new Response(JSON.stringify({
      ok: false,
      message: body?.title === 'Cleaned'
        ? 'This address was cleaned (bounced) and can’t be re‑subscribed.'
        : body?.title === 'Member In Compliance State'
        ? 'Mailchimp requires reconfirmation for this address.'
        : body?.detail || 'Subscription failed.',
      debug: body
    }), { status: mcRes.status, headers: { 'content-type': 'application/json' } });
  }

  return new Response(JSON.stringify({ ok: true, message: 'You’re subscribed! 🎉' }), {
    status: 200, headers: { 'content-type': 'application/json' }
  });
};
