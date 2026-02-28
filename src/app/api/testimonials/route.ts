import { NextResponse } from 'next/server';

export async function GET() {
  const SHEET_ID = '1YLdxdMxJweqg-KyRvdHLbH9i2Ke6ymMVtkJD0wk0yds';
  const GID = '0';
  const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID}`;

  try {
    const response = await fetch(URL, { 
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const text = await response.text();
    
    // Remove the google.visualization.Query.setResponse(...) wrapper
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    
    if (jsonStart === -1 || jsonEnd === -1) {
       return NextResponse.json({ error: 'Invalid response from Google Sheets' }, { status: 500 });
    }

    const jsonString = text.substring(jsonStart, jsonEnd + 1);
    const data = JSON.parse(jsonString);
    
    const rows = data.table.rows;
    const testimonials = rows.slice(1).map((row: any, index: number) => {
      const name = row.c[0]?.v || 'Anonymous Student';
      const reviewText = row.c[1]?.v || '';
      const level = row.c[2]?.v || 'DataCraft Student';



      return {
        id: index + 1,
        studentName: name,
        review: reviewText,
        courseName: level,
        rating: 5,
        studentTitle: level.includes('Beginner') ? 'Junior Data Engineer' : 'Data Engineering Associate',
        studentImage:`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=11113F&color=85ECFC&bold=true`,
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('API Testimonials Error:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
