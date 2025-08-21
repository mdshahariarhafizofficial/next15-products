import { NextResponse } from "next/server";
import { products } from "./data";

export async function GET() {
  // In real world you might read from DB here
  return NextResponse.json(products);
}
