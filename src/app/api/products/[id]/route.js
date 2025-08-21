import { NextResponse } from "next/server";
import { products } from "../data";

export async function GET(_req, { params }) {
  const idNum = Number(params.id);
  const product = products.find((p) => p.id === idNum);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
