import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en-US', 'vi-VN', 'fr-FR'];
const defaultLocale = 'en-US';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = ['en-US', 'vi-VN', 'fr-FR'];

  try {
    return matchLocale(languages, locales, defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Add debug header to every response
  const response = NextResponse.next();
  response.headers.set('x-middleware-cache', 'no-cache');
  response.headers.set('x-middleware-debug', 'true');

  const pathname = request.nextUrl.pathname;
  response.headers.set('x-pathname', pathname);

  // Redirect root path to /en-US/app
  if (pathname === '/') {
    response.headers.set('x-redirect', 'true');
    return NextResponse.redirect(new URL('/en-US/app', request.url));
  }

  // Skip if the pathname starts with _next, api, or static files
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    response.headers.set('x-skipped', 'true');
    return response;
  }

  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    response.headers.set('x-redirect-locale', locale);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return response;
}

// Simplify the matcher to catch all routes
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
