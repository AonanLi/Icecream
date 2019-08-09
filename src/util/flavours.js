import images from './images';

const flavours = [
    { key: 'Vanilla', price: 3.5, tags: [0, 1] },
    { key: 'Coconut', price: 4.5, tags: [0, 1, 2, 3] },
    { key: 'Chocolate', price: 4, tags: [0, 1, 2, 3, 4, 5] },
    { key: 'Green Tea', price: 4, tags: [0, 1] },
    { key: 'Black Sesame', price: 3.5, tags: [4, 5] },
    { key: 'Ripple Blueberry', price: 3.5, tags: [1, 3, 5] },
    { key: 'Chip Chocolate', price: 4, tags: [1, 2, 4] },
    { key: 'Ripple Chocolate', price: 4.5, tags: [2, 3] },
    { key: 'Cream Cookies', price: 3, tags: [0, 3] },
    { key: 'Double Chocolate', price: 4.5, tags: [1, 3] },
    { key: 'Durian', price: 3.5, tags: [1, 4] },
    { key: 'Jackfruit', price: 3.5, tags: [1, 5] },
    { key: 'Lemon Sherbet', price: 3, tags: [2, 3, 5] },
    { key: 'Lychee Sherbet', price: 3.5, tags: [3, 4] },
    { key: 'Mango', price: 4.5, tags: [1, 2] },
    { key: 'Milk', price: 3.5, tags: [2, 4] },
    { key: 'Mint Chocolate', price: 4, tags: [2, 4, 5] },
    { key: 'Mocha', price: 4, tags: [3, 5] },
    { key: 'Mocha Chip', price: 3.5, tags: [0, 1, 2, 3] },
    { key: 'Pandan', price: 4.5, tags: [0, 1, 2, 3] },
    { key: 'Passion Fruit', price: 3.5, tags: [0, 1, 2, 3] },
    { key: 'Swirl Raspberry', price: 4.5, tags: [0, 1, 2, 3] },
    { key: 'Raisin Grandeur', price: 3.5, tags: [0, 1, 2, 3] },
    { key: 'Salted Camarel', price: 3.5, tags: [0, 1, 2, 3] },
    { key: 'Strawberry', price: 4.5, tags: [0, 1, 2, 3] },
    { key: 'Sweet Corn', price: 4, tags: [0, 1, 2, 3] },
    { key: 'Taro', price: 4, tags: [0, 1, 2, 3] },
    { key: 'Milk Tea', price: 3.5, tags: [0, 1, 2, 3] },
    { key: 'Tropicana', price: 3, tags: [0, 1, 2, 3] },
    { key: 'Tuiti Fruity', price: 3.5, tags: [0, 1, 2, 3] },
    { key: 'Yogurt', price: 4.0, tags: [0, 1, 2, 3] },
    { key: 'Yuzu', price: 4.5, tags: [0, 1, 2, 3] }
].map(f => ({ ...f, image: images[f.key] }));

export default flavours;
