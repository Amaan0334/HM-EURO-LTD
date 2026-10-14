import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parseResult = newsletterSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email } = parseResult.data;

    // Log to console (placeholder for newsletter provider like Mailchimp, Klaviyo, ConvertKit)
    console.log('[API newsletter] Subscribed email:', {
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to fragrance updates',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API newsletter] Unexpected error subscribing to newsletter:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid request body or internal error',
      },
      { status: 500 }
    );
  }
}
