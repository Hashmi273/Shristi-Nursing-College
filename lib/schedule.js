// All schedule math in IST (UTC+5:30)
const IST = 5.5 * 3600 * 1000;
const workDays = () =>
  (process.env.WORKING_DAYS || '1,2,3,4,5').split(',').map((n) => parseInt(n, 10));

const istParts = (d) => new Date(d.getTime() + IST);
export const istDateKey = (d) => istParts(d).toISOString().slice(0, 10);
export const isWorkingDay = (d = new Date()) => workDays().includes(istParts(d).getUTCDay());

// 12:00 PM IST on the IST calendar day of `d`
function noonIST(d) {
  const key = istDateKey(d);
  return new Date(new Date(key + 'T12:00:00Z').getTime() - IST);
}

export function nextReminderAt(client, now = new Date()) {
  if (!client.reminder_on || client.status === 'completed') return null;
  let t = noonIST(now);
  const sentToday =
    client.last_reminder_at && istDateKey(new Date(client.last_reminder_at)) === istDateKey(now);
  if (t <= now || sentToday) t = new Date(t.getTime() + 86400000);
  for (let i = 0; i < 8 && !isWorkingDay(t); i++) t = new Date(t.getTime() + 86400000);
  return t;
}
