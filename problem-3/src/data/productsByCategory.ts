export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  bestSeller?: boolean;
}
export interface CategoryProducts {
  [category: string]: Product[];
}
export const productsByCategory: CategoryProducts = {
  laptops: [
    {
      id: 1,
      name: "Laptop Carbon Grey",
      price: 70000,
      image: "laptop.avif",
      bestSeller: true,
    },
    {
      id: 2,
      name: "TouchScreen Laptop",
      price: 80000,
      image: "laptop2.avif",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 90000,
      image: "laptop3.avif",
    },
    {
      id: 4,
      name: "Corr Desktop",
      price: 60000,
      image: "laptop4.avif",
    },
    {
      id: 5,
      name: "Wide Monitor",
      price: 75000,
      image: "laptop5.avif",
    }
  ],
  headphones: [
    {
      id: 6,
      name: "Boat wired",
      price: 50000,
      image: "earphones.avif",
      bestSeller: true,
    },
    { id: 7, name: "Noise Buds", price: 45000, image: "earpods.avif", bestSeller:true },
    { id: 8, name: "Airpods", price: 45000, image: "headphone.png" },
    { id: 9, name: "Portable Bluetooth Speaker", price: 45000, image: "speaker1.avif" },
    { id: 10, name: "Sound Bar", price: 70000, image: "speaker2.avif" },
    { id: 11, name: "Bluetooth Speaker With Handle", price: 90000, image: "speaker3.avif" }
  ],
  watches: [
    {
      id: 12,
      name: "Titan",
      price: 60000,
      image: "watch.avif",
      bestSeller: true,
    },
    { id: 13, name: "Fitness Tracker", price: 90000, image: "watch1.avif" },
    { id: 14, name: "SmartWatch with Charger", price: 95000, image: "watch2.avif" },
    { id: 15, name: "Pantony Activity Tracker", price: 80000, image: "watch3.avif" },
  ],
  television: [
    {
      id: 16,
      name: "SmartTV",
      price: 60000,
      image: "smartTv1.jpg",
      bestSeller: true,
    },
    {
      id: 17,
      name: "Nano SmartTV",
      price: 66000,
      image: "smartTv2.avif",
    
    },
    {
      id: 18,
      name: "Wireless Mini Projector",
      price: 68000,
      image: "projector.avif",
    
    },
    {
      id: 19,
      name: "Shell'40 Smart TV",
      price: 68000,
      image: "smartTv3.avif",
    
    }
  ],
  camera:[
    {id: 20,
      name: "MegaPixel Digital Camera",
      price: 68000,
      image: "camera1.avif",
    },
    {id: 21,
      name: "DSLR Camera",
      price: 50000,
      image: "camera2.avif",
    },
    {id: 22,
      name: "WaterProof Camera",
      price: 50000,
      image: "camera3.avif",
    },

  ]
};
