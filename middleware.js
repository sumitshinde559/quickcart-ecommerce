import { NextResponse } from 'next/server';

// The seller dashboard has no authentication yet, so it stays closed
// unless the demo flag is explicitly enabled.
export function middleware(request) {
    if (process.env.NEXT_PUBLIC_SELLER_DEMO !== 'true') {
        return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/seller/:path*'],
};
