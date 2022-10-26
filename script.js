function bookPurchase(
   detail,
   percentageDiscount = 10,
   percentageTax = 3,
   stock = 10
) {
   let { title, price, isPurchased, amount } = detail;
   let message;
   let totalPrice = 0;

   if (amount < stock) {
      for (let x = 0; x < amount; x++) {
         // total price with amount
         totalPrice += price;
      }
      // count discount
      totalPrice = (totalPrice * (100 - percentageDiscount)) / 100;

      // count tax
      totalPrice = (totalPrice * (100 - percentageTax)) / 100;

      // cheklist purchased
      isPurchased = true;

      message =
         "Terimakasih telah membayar. Stock kami masih tersedia jika anda ingin membeli lagi.";
   } else if (amount === stock) {
      for (let x = 0; x < amount; x++) {
         // total price with amount
         totalPrice += price;
      }
      // count discount
      totalPrice = (totalPrice * (100 - percentageDiscount)) / 100;

      // count tax
      totalPrice = (totalPrice * (100 - percentageTax)) / 100;

      // cheklist purchased
      isPurchased = true;

      message =
         "Terimakasih telah membayar. Anda tidak bisa membeli lagi karena stock kami habis.";
   } else {
      message = "Maaf stock kami tidak mencukupi jumlah pembelian anda.";
   }

   return {
      judulBuku: title,
      Jumlah: `${amount} buku`,
      Harga: `Rp${price}`,
      TotalHarga: `Rp${totalPrice}`,
      StatusBayar: isPurchased === true ? "lunas" : "belum lunas",
      Pesan: message,
   };
}

const purchasedBook = bookPurchase({
   title: "Habis gelap terbitlah terang",
   price: 10000,
   isPurchased: false,
   amount: 10,
});

console.log(purchasedBook);
