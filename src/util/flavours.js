import images from './images';

const flavours = [
    { key: 'Vanilla', price: 3.5 },
    { key: 'Coconut', price: 4.5 },
    { key: 'Chocolate', price: 4 },
    { key: 'Green Tea', price: 4 },
    { key: 'Black Sesame', price: 3.5 },
    { key: 'Blueberry Ripple', price: 3.5 },
    { key: 'Chocolate Chip', price: 4 },
    { key: 'Chocolate Ripple', price: 4.5 },
    { key: 'Cookies Cream', price: 3 },
    { key: 'Double Chocolate', price: 4.5 },
    { key: 'Durian', price: 3.5 },
    { key: 'Jackfruit', price: 3.5 },
    { key: 'Lemon Sherbet', price: 3 },
    { key: 'Lychee Sherbet', price: 3.5 },
    { key: 'Mango', price: 4.5 },
    { key: 'Milk', price: 3.5 },
    { key: 'Mint Chocolate', price: 4 },
    { key: 'Mocha', price: 4 },
    { key: 'Mocha Chip', price: 3.5 },
    { key: 'Pandan', price: 4.5 },
    { key: 'Passion Fruit', price: 3.5 },
    { key: 'Raspberry Swirl', price: 4.5 },
    { key: 'Raisin Grandeur', price: 3.5 },
    { key: 'Salted Camarel', price: 3.5 },
    { key: 'Strawberry', price: 4.5 },
    { key: 'Sweet Corn', price: 4 },
    { key: 'Taro', price: 4 },
    { key: 'Milk Tea', price: 3.5 },
    { key: 'Tropicana', price: 3 },
    { key: 'Tuiti Fruity', price: 3.5 },
    { key: 'Yogurt', price: 4.0 },
    { key: 'Yuzu', price: 4.5 }
].map(f => ({ ...f, image: images[f.key] }));

export default flavours;
