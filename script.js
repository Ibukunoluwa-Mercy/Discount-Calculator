function  calculateDiscount (){
    let amount = document.getElementById("priceInput").value
    let discount = document.getElementById("percentInput").value
    
    let price = (amount * discount) / 100;
    let percent = amount - price;

    document.getElementById("originalAmount").innerHTML = "Original Amount ₦"+  price;
    document.getElementById("discountAmount").innerHTML = "Discount Amount ₦" + percent;
    
    percentInput.innerHTML= 'Congratulations. You have a discount of' + discount + '%' + 'which means you have ₦' + price + 'chalked off the original amount of ₦' + amount  + '. The new fee you are paying is now ₦' + percent
}