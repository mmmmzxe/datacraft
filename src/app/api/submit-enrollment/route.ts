import { NextRequest, NextResponse } from 'next/server';

interface EnrollmentData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  whichLevel: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: EnrollmentData = await request.json();
    
    // Google Sheets Web App URL (you'll need to create this in Google Apps Script)
    // For now, I'll show you how to structure the data
    const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzJPUVBjr0GqEXtY1K9VJz073egr3yDMVP0zY53uIfTBFRDKTi-0KWj9HhOeDBATKSN/exec';

    if (!GOOGLE_SHEETS_WEB_APP_URL) {
      return NextResponse.json(
        { 
          error: 'Google Sheets Web App URL is not configured correctly.',
          details: 'Please follow the instructions in GOOGLE_SHEETS_SETUP.md to deploy your script and update GOOGLE_SHEETS_WEB_APP_URL in .env.local'
        },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const formData = new URLSearchParams({
      'First Name': data.firstName,
      'Last Name': data.lastName,
      'Phone Number': data.phoneNumber,
      'Email': data.email,
      'Which Level?': data.whichLevel,
    });

    console.log('Submitting to Google Sheets:', GOOGLE_SHEETS_WEB_APP_URL);

    // Submit to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const responseText = await response.text();
    console.log('Google Sheets Response Status:', response.status);
    console.log('Google Sheets Response Body:', responseText);

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}: ${responseText}`);
    }

    return NextResponse.json({ 
      message: 'Enrollment submitted successfully',
      success: true 
    });

  } catch (error: any) {
    console.error('Error submitting enrollment:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit enrollment',
        message: error.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}