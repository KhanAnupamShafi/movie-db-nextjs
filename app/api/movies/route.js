import { getAllMovies } from "@/app/[lang]/dynamic-import";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllMovies();
  return NextResponse.json(data);
}
