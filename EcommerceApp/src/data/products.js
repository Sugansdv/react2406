// src/data/products.js
import img1 from '../assets/img1.avif';
import img2 from '../assets/image2.avif';
import img3 from '../assets/image3.avif';

const products = [
  {
    id: 1,
    name: 'Running Shoes',
    price: 2499,
    image: img1,
    description: 'Lightweight shoes perfect for daily runs.',
    category: 'Footwear',
  },
  {
    id: 2,
    name: 'Casual Sneakers',
    price: 1999,
    image: img2,
    description: 'Comfortable sneakers for everyday wear.',
    category: 'Footwear',
  },
  {
    id: 3,
    name: 'Cotton T-shirt',
    price: 799,
    image: img3,
    description: 'Breathable fabric, summer essential.',
    category: 'Clothing',
  },
];

export default products;
