function creditCounter(totalPrice, creditMonth) {
   let creditPerMonth = [];
   let sisaBagi = totalPrice % creditMonth;
   totalPrice -= sisaBagi;
   let result = totalPrice / creditMonth;
   // menghitung bunga
   result = (totalPrice + result / 2) / creditMonth;
   result = result.toFixed(0);
   for (let x = 0; x < creditMonth; x++) {
      creditPerMonth.push(result);
   }
   return creditPerMonth;
}

function bookPurchase(
   detail,
   percentageDiscount = 10,
   percentageTax = 3,
   stock = 10
) {
   let { title, price, isPurchased, amount, creditMonth } = detail;
   let message;
   let totalPrice = 0;
   let creditPerMonth = [];

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

      // calculate credit
      creditPerMonth = creditCounter(totalPrice, creditMonth);

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

      // calculate credit
      creditPerMonth = creditCounter(totalPrice, creditMonth);

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
      Credit: `${creditMonth} kali`,
      Credit_Bulan_Ke: creditPerMonth,
      Pesan: message,
   };
}

const purchasedBook = bookPurchase({
   title: "Habis gelap terbitlah terang",
   price: 10000,
   isPurchased: false,
   amount: 10,
   creditMonth: 6,
});

console.log(purchasedBook);
