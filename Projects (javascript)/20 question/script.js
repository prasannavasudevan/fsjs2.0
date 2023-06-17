const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if('Meat' in shoppingCart === false){
    shoppingCart.unshift("Meat");
}
if('Sugar' in shoppingCart === false){
    shoppingCart.push('Sugar');
}
shoppingCart.pop("Honey");
const num = shoppingCart.indexOf("Tea");
shoppingCart[num] = 'Green tea';
console.log(shoppingCart);