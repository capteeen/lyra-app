import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add cache headers for favicon and manifest
  if (request.nextUrl.pathname.match(/\/(favicon\.ico|manifest\.json)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('CDN-Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

export const config = {
  matcher: [
    '/favicon.ico',
    '/manifest.json',
  ],
} 