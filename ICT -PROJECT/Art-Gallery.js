const btn = document.getElementById("add-to-cart-button");

    let numItems = 0;
    let total = 0;

function addToCard(input)
{

    numItems++;
    total += input

    window.alert(`Number of items: ${numItems}`);
    window.alert(`Total: $${total}`);


}