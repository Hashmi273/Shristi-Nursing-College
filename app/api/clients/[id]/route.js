import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(req, { params }) {
  const b = await req.json();
  let patch = {};
  if (typeof b.reminder_on === 'boolean') patch.reminder_on = b.reminder_on;
  if (b.action === 'complete') patch = { status: 'completed', reminder_on: false, completed_at: new Date().toISOString() };
  if (b.action === 'reopen') patch = { status: 'pending', reminder_on: true, completed_at: null };
  const { error } = await db().from('clients').update(patch).eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req, { params }) {
  const { error } = await db().from('clients').delete().eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
