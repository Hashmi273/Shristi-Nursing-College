async function post(url, key, to, message) {
  if (!url) throw new Error('API URL not configured');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key || ''}` },
    body: JSON.stringify({ to, message }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

// Adapt these two functions to your existing provider's request format.
export const sendSMS = (to, msg) =>
  post(process.env.SMS_API_URL, process.env.SMS_API_KEY, to, msg);
export const sendWhatsApp = (to, msg) =>
  post(process.env.WHATSAPP_API_URL, process.env.WHATSAPP_API_KEY, to, msg);
