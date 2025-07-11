import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { error: 'Missing email' },
      { status: 400 }
    );
  }

  try {
    const apiRes = await fetch(`https://rapid-email-verifier.fly.dev/api/validate?email=${encodeURIComponent(email)}`);
    const data = await apiRes.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Email verification failed' },
      { status: 500 }
    );
  }
}