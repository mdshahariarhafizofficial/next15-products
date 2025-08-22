import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "src/app/api/products/data.json");

function loadProducts() {
  const json = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(json);
}

// GET product by id
export async function GET(_, { params }) {
  const { id } = params;
  const products = loadProducts();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }
  return Response.json(product);
}
