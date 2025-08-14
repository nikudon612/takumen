import type { RequestHandler } from './$types';
import crypto from 'crypto';

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const DC = process.env.MAILCHIMP_DC || API_KEY.split('-')[1];
const DEFAULT_STATUS = (process.env.MAILCHIMP_OPT_IN_STATUS || 'pending') as
  | 'pending'
  | 'subscribed';

function md5Lower(str: string) {
  return crypto.createHash('md5').update(str.toLowerCase()).digest('hex');
}

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export const POST: RequestHandler = async ({ request }) => {
  let { email, website } = await request.json().catch(() => ({}));

  // Honeypot check
  if (website) {
    return new Response(JSON.stringify({ ok: true, message: 'Thanks — check your inbox shortly.' }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  }

  if (!email || !isValidEmail(email)) {
    return new Response(JSON.stringify({ ok: true, message: 'Thanks — check your inbox shortly.' }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  }

  const memberHash = md5Lower(email);
  const endpoint = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${memberHash}`;
  const auth = 'Basic ' + Buffer.from(`anystring:${API_KEY}`).toString('base64');

  const payload = {
    email_address: email,
    status_if_new: DEFAULT_STATUS,
    status: DEFAULT_STATUS
  };

  try {
    await fetch(endpoint, {
      method: 'PUT',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch {}

  return new Response(JSON.stringify({ ok: true, message: 'Thanks — check your inbox shortly.' }), {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
};
