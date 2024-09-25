import { NextResponse } from 'next/server'
import { generateFavicons } from '@/lib/generateFavicons'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      console.error('No file uploaded')
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const zipContent = await generateFavicons(file)
    return new NextResponse(zipContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="favicons.zip"'
      }
    })
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}