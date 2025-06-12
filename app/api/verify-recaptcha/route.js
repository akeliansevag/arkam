// app/api/verify-recaptcha/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { token } = await request.json();
  const secret = process.env.RECAPTCHA_SECRET;
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: 'POST' }
  );
  const data = await res.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      { success: false, errors: data['error-codes'] || [] },
      { status: 400 }
    );
  }
}