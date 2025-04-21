import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';

  // NOTE(jimmylee)
  // Ensure redirect only happens on root and not already on /cards
  if (host === 'flagpost.org' && request.nextUrl.pathname !== '/cards') {
    const url = request.nextUrl.clone();
    url.pathname = '/cards';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
