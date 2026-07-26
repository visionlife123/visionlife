import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const logFilePath = path.join(process.cwd(), "public", "error.txt");
    const logMessage = `[${new Date().toISOString()}] ${JSON.stringify(data, null, 2)}\n\n`;
    fs.appendFileSync(logFilePath, logMessage, "utf8");
    console.error("CLIENT-SIDE RUNTIME ERROR CAUGHT:", data);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) });
  }
}
