var jumlahAngkot = 10;
var angkotBeroperasi = 6;

// while (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     noAngkot++;
// }

// for (let noAngkot = angkotBeroperasi + 1; noAngkot < jumlahAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
// }

// for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }

// Video 22 Pengkondisian Else If pada JS
// var angka = prompt("Masukkan angka: ");
// if (angka % 2 === 0) {
//   alert(angka + " adalah bilangan GENAP");
// } else if (angka % 2 === 1) {
//   alert(angka + " adalah bilangan GANJIL");
// } else {
//   alert("Yang anda input bukan sebuah angka");
// }

// Task angkot4.js
for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}
