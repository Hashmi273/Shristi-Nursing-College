import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Public routes: Home page, login, cron, images/assets
  if (
    pathname === '/' ||
    pathname === '/login' ||
    pathname.startsWith('/api/cron') ||
    pathname.startsWith('/api/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // Admin protected routes
  if (req.cookies.get('auth')?.value === process.env.ADMIN_PASSWORD) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next|favicon.ico).*)'] };
