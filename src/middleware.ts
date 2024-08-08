import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone()
    const token = req.cookies.get('token')

    if (!token && url.pathname.startsWith('/dashboard') && !url.pathname.startsWith('/dashboard/auth/login')) {
        url.pathname = '/dashboard/auth/login'
        return NextResponse.redirect(url)
    }

    if(token && url.pathname === '/dashboard/auth/login') {
        url.pathname = '/dashboard'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
