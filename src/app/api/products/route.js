import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "src/app/api/products/data.json");

function loadProducts() {
  const json = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(json);
}

function saveProducts(products) {
  fs.writeFileSync(dataFile, JSON.stringify(products, null, 2), "utf-8");
}

// GET all products
export async function GET() {
  const products = loadProducts();
  return Response.json(products);
}

// POST new product
export async function POST(req) {
  try {
    const newProduct = await req.json();
    const products = loadProducts();

    // unique id generate
    newProduct.id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    products.push(newProduct);
    saveProducts(products);

    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Failed to add product" }, { status: 500 });
  }
}
