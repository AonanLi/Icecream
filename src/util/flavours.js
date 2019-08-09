import images from './images';

const flavours = [
    {
        key: 'Vanilla',
        price: 3.5,
        tags: ['Most popular flavour', 'Classic', 'Signature'],
        brief:
            'A creamy, satisfying and oh-so-classic vanilla treat. This is simplicity at its best.'
    },
    {
        key: 'Coconut',
        price: 4.5,
        tags: ['Classic', 'Signature', 'Fruit'],
        brief:
            'Ice cream that is made from real coconuts - a creamy, light and refreshing experience. A taste so similar to the real fruit, you couldn’t tell the difference!'
    },
    {
        key: 'Chocolate',
        price: 4,
        tags: ['Classic', 'Signature', 'Chocolate'],
        brief:
            'A velvety, rich and flavourful chocolate ice cream, made from aromatic cocoa beans, ready for indulgence.'
    },
    {
        key: 'Green Tea',
        price: 4,
        tags: ['Classic', 'Signature'],
        brief:
            'We offer both Jasmine and Matcha Green Tea ice creams. Using real green tea leaves and matcha from Japan, both choices are smooth and fragrant, and as enticing and exotic as the real deal.'
    },
    { key: 'Black Sesame', price: 3.5, tags: ['Classic', 'Signature'], brief: 'Coming soon' },
    {
        key: 'Ripple Blueberry',
        price: 3.5,
        tags: ['Milk', 'Fruit'],
        brief:
            'Our Blueberry Ripple ice cream is made by swirling blueberry jam into milk ice cream. Smooth, sweet and soo blueberrily delicious – a signature creation we cannot be more proud of!'
    },
    {
        key: 'Chip Chocolate',
        price: 4,
        tags: ['Chocolate'],
        brief: 'Crunchy chocolate bits generously scattered into soft vanilla ice cream.'
    },
    {
        key: 'Ripple Chocolate',
        price: 4.5,
        tags: ['Chocolate'],
        brief: 'Waves of chocolate sauce drizzled into vanilla ice cream.'
    },
    {
        key: 'Cream Cookies',
        price: 3,
        tags: ['Classic', 'Signature'],
        brief:
            'Crushed chocolate cookies, stirred into creamy milk ice cream. Re-live your childhood by dunking into this!'
    },
    {
        key: 'Double Chocolate',
        price: 4.5,
        tags: ['Chocolate'],
        brief:
            'With extra chocolate bits and fudge, our all time popular chocolate ice cream is now given that extra boost!'
    },
    {
        key: 'Durian',
        price: 3.5,
        tags: ['Classic', 'Signature', 'Fruit'],
        brief:
            'Known as the king of the fruits, our durian ice cream is made from real durian and has become one of our signature flavours.'
    },
    {
        key: 'Jackfruit',
        price: 3.5,
        tags: ['Fruit'],
        brief:
            'A favourite Asian dessert and fruit, all rolled into this jackfruit loaded coconut based ice cream.'
    },
    {
        key: 'Lemon Sherbet',
        price: 3,
        tags: ['Fruit'],
        brief:
            'Perfect for a hot summers day. With a tinge of sour, our lemon sherbet is so light and refreshing!'
    },
    {
        key: 'Lychee Sherbet',
        price: 3.5,
        tags: ['Fruit'],
        brief:
            'With bits of lychee fruits in our lychee sherbet, we are loving this refreshing creation – so fit for a hot summers day!'
    },
    {
        key: 'Mango',
        price: 4.5,
        tags: ['Most popular flavour', 'Classic', 'Signature', 'Fruit'],
        brief:
            'Our mango ice cream is made from Thai Mangos - you can find real mango bits in our ice cream!'
    },
    { key: 'Milk', price: 3.5, tags: ['Milk'], brief: 'Coming soon' },
    {
        key: 'Mint Chocolate',
        price: 4,
        tags: ['Chocolate'],
        brief: 'Experience the gush of minty cool with our mint chocolate chip ice cream.'
    },
    {
        key: 'Mocha',
        price: 4,
        tags: ['Most popular flavour', 'Classic'],
        brief:
            'Strong, full-bodied and aromatic. Get your caffeine flavour fix with this rich frozen treat.'
    },
    {
        key: 'Mocha Chip',
        price: 3.5,
        tags: ['Classic'],
        brief: 'Chocolate bits in our full-bodied mocha ice cream for extra indulgence!'
    },
    { key: 'Pandan', price: 4.5, tags: ['Signature'], brief: 'Coming soon' },
    { key: 'Passion Fruit', price: 3.5, tags: ['Fruit'], brief: 'Coming soon' },
    {
        key: 'Swirl Raspberry',
        price: 4.5,
        tags: ['Fruit'],
        brief:
            'Soft vanilla ice cream rippled with raspberry sauce. Tangy and sweet - a pleasant combination.'
    },
    {
        key: 'Raisin Grandeur',
        price: 3.5,
        tags: ['Fruit'],
        brief: 'It’s raisins aplenty in this good ol’ rum flavoured ice cream!'
    },
    { key: 'Salted Camarel', price: 3.5, tags: ['Signature'], brief: 'Coming soon' },
    {
        key: 'Strawberry',
        price: 4.5,
        tags: ['Classic', 'Signature', 'Fruit'],
        brief:
            'Strawberry ice cream swirled with strawberry jam made with real strawberries - a delicious sweet surprise at every bite.'
    },
    {
        key: 'Sweet Corn',
        price: 4,
        tags: ['Signature'],
        brief: 'Little bits of sweet corn mixed into sweet corn ice cream.'
    },
    {
        key: 'Taro',
        price: 4,
        tags: ['Classic'],
        brief: 'Real taro chunks are blended to make this smooth and creamy delight.'
    },
    { key: 'Milk Tea', price: 3.5, tags: ['Milk'], brief: 'Coming Soon' },
    {
        key: 'Tropicana',
        price: 3,
        tags: ['Fruit'],
        brief: 'A perfect mix of sweet-corn, jackfruit and green jelly in coconut ice cream.'
    },
    {
        key: 'Tuiti Fruity',
        price: 3.5,
        tags: ['Fruit'],
        brief:
            'Tutti Fruitty is likened to taste like cotton-candy or bubble gum! A great reason to fall in love with this flavour!'
    },
    { key: 'Yogurt', price: 4.0, tags: ['Milk'], brief: 'Coming soon' },
    { key: 'Yuzu', price: 4.5, tags: ['Fruit'], brief: 'Coming Soon' }
].map(f => ({ ...f, image: images[f.key] }));

export default flavours;
