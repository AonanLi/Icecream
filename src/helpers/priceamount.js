const priceamount = ({ price, amount }) => `$ ${price.toFixed(2)}${amount ? ` x ${amount}` : ''}`;

export default priceamount;
