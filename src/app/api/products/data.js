// Simple in-memory mock data (demo)
// Later you can replace with DB
export const products = [
  {
    id: 1,
    name: "Premium Laptop",
    description: "Powerful 14\" laptop for work & play.",
    longDescription:
      "This premium laptop features a fast processor, color-accurate display and all-day battery life. Ideal for developers & creators.",
    price: 1299,
    image: "https://dummyimage.com/800x600/3b82f6/ffffff&text=Laptop",
    features: ["Intel Core i7", "16GB RAM", "512GB SSD", "14\" IPS Display"],
  },
  {
    id: 2,
    name: "Smartphone Pro",
    description: "Flagship camera & all-day battery.",
    longDescription:
      "Take stunning photos with advanced computational photography and enjoy fluid performance throughout the day.",
    price: 899,
    image: "https://dummyimage.com/800x600/f59e0b/ffffff&text=Phone",
    features: ["Triple Camera", "8GB RAM", "128GB Storage", "5G"],
  },
  {
    id: 3,
    name: "Noise-Cancel Headphones",
    description: "Immersive sound. Less noise.",
    longDescription:
      "Block the world and dive into your music. Comfortable fit and crystal-clear calls with beamforming mics.",
    price: 249,
    image: "https://dummyimage.com/800x600/10b981/ffffff&text=Headphones",
    features: ["Active NC", "40mm Drivers", "Bluetooth 5.3", "30h Battery"],
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Fitness, notifications, payments.",
    longDescription:
      "Track your runs, monitor heart rate, and stay in touch. Swim-proof with fast magnetic charging.",
    price: 199,
    image: "https://dummyimage.com/800x600/f43f5e/ffffff&text=Smartwatch",
    features: ["GPS", "Heart Rate", "5ATM", "Sleep Tracking"],
  },
  {
    id: 5,
    name: "4K Monitor",
    description: "Crisp 27\" 4K with thin bezels.",
    longDescription:
      "Perfect pixel density for design & code. Factory-calibrated color with low blue light mode.",
    price: 399,
    image: "https://dummyimage.com/800x600/8b5cf6/ffffff&text=4K+Monitor",
    features: ["27\" 4K", "IPS Panel", "HDR10", "USB-C 65W PD"],
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    description: "Tactile switches. Per-key RGB.",
    longDescription:
      "Hot-swappable switches with durable PBT keycaps. Compact layout with full arrow keys.",
    price: 129,
    image: "https://dummyimage.com/800x600/ef4444/ffffff&text=Keyboard",
    features: ["Hot-swap", "PBT Caps", "NKRO", "USB-C"],
  },
  {
    id: 7,
    name: "Portable SSD",
    description: "Fast external NVMe storage.",
    longDescription:
      "Transfer large files in seconds. Pocket-size durability with aluminum shell.",
    price: 149,
    image: "https://dummyimage.com/800x600/06b6d4/ffffff&text=Portable+SSD",
    features: ["NVMe", "Up to 1000MB/s", "USB-C", "Aluminum"],
  },
  {
    id: 8,
    name: "Wireless Mouse",
    description: "Ergonomic. Quiet clicks.",
    longDescription:
      "Precision tracking on any surface with long battery life and multi-device pairing.",
    price: 49,
    image: "https://dummyimage.com/800x600/22c55e/ffffff&text=Mouse",
    features: ["BT + 2.4G", "Silent Switch", "Adjustable DPI", "AA Battery"],
  },
];
