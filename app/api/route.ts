// API route handler
// Add your API endpoints here

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "API route working" });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ success: true, data });
}
