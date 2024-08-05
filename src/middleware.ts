// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function runs on every request
export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone()
    const token = req.cookies.get('token')

    if (!token && url.pathname === '/dashboard') {
        url.pathname = '/dashboard/auth/login'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

// Specify the paths where the middleware should run
export const config = {
    matcher: ['/dashboard', '/another-protected-route'],
}
