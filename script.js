function bookPurchase(detail, percentageDiscount, percentageTax) {
   let { title, price, isPurchased } = detail;

   // count discount
   price = (price * (100 - percentageDiscount)) / 100;

   // count tax
   price = (price * (100 - percentageTax)) / 100;

   // cheklist purchased
   isPurchased = true;

   return {
      title: title,
      price: price,
      isPurchased: isPurchased,
   };
}

const purchasedBook = bookPurchase(
   { title: "Habis gelap terbitlah terang", price: 100000, isPurchased: false },
   10,
   3
);

console.log(purchasedBook);
