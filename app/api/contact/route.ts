import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = parseResult.data;

    // Log to console (placeholder for email sending service such as Resend, SendGrid, etc.)
    console.log('[API contact] Received valid contact form submission:', {
      name: validData.name,
      email: validData.email,
      subject: validData.subject,
      messageLength: validData.message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message received',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API contact] Unexpected error handling contact submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid request body or internal error',
      },
      { status: 500 }
    );
  }
}
