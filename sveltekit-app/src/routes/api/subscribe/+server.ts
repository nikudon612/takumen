// import { json } from '@sveltejs/kit';

// export async function POST({ request }) {
// 	const { email } = await request.json();

// 	if (!email || !email.includes('@')) {
// 		return json({ error: 'Invalid email address' }, { status: 400 });
// 	}

// 	const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
// 	const LIST_ID = import.meta.env.MAILCHIMP_LIST_ID;
// 	const DC = import.meta.env.MAILCHIMP_DC;

// 	const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

// 	const res = await fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			Authorization: `apikey ${API_KEY}`,
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			email_address: email,
// 			status: 'subscribed' // or 'pending' if you want double opt-in
// 		})
// 	});

// 	if (res.ok) return json({ success: true });

// 	const error = await res.json();
// 	return json({ error: error.detail || 'Something went wrong' }, { status: 400 });
// }
