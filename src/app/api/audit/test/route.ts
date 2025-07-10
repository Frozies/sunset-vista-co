import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        success: true,
        message: 'Audit API is working on Vercel',
        timestamp: new Date().toISOString()
    });
} 