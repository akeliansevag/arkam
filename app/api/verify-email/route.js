// /app/api/verify-email/route.js
import { NextResponse } from 'next/server';
import NeverBounce from 'neverbounce';

// You should keep your API key in an environment variable for security
const client = new NeverBounce({
  apiKey: process.env.NEVERBOUNCE_API_KEY,
});

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
    // Verify email using NeverBounce
    const result = await client.single.check(email);

    // Example result:
    // {
    //   "status": "success",
    //   "result": "valid",
    //   "flags": [...],
    //   "suggested_correction": "",
    //   "execution_time": 233
    // }

    let verificationStatus;
    if (result.result === "valid") {
      verificationStatus = "VALID";
    } else if (result.result === "catchall") {
      verificationStatus = "CATCHALL"; // special category
    } else {
      verificationStatus = "INVALID";
    }

    return NextResponse.json({
      status: verificationStatus,
      details: result
    });
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Email verification failed' },
      { status: 500 }
    );
  }
}