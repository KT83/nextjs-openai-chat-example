import { NextResponse } from "next/server";

// responsing 'hello'
export async function GET() {
  return NextResponse.json({ message: "hello" });
}
