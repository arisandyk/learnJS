/*
Daftar Materi:
1. Operator pada JavaScript: Aritmatika (+, -, /, %, *), Penugasan (=, +=, -=, *=, %=, /= ), Perbandingan (==, ===, !=, !==, >, <, >=, <=)
2. Operator pada JavaScript: Logika (&&, ||, !), String (+), Typeof, & Kondisional)
3. Tipe Data pada JS: String
*/

// A. Operator pada JS
let x = 12;
let hasilPemerikasaan = (x %2 == 0);
let y = typeof(x);
console.log(hasilPemerikasaan);
console.log(y);

let operatorKondisional = (x %2 == 0)? "Genap":"Ganjil";
console.log(operatorKondisional);

// B. Tipe Data String
// Escape Karakter \", \', \n, \t, \b, \uXXXXX
// Concestination
let kombinasiTipeDataString = 'Hari ini adalah hari jum\'at\n Aku seperti biasa kerja ke\tkantor\u00A9';
console.log(kombinasiTipeDataString + ' ' + kombinasiTipeDataString.length );

// C. Tipe Data Boolean (True / False)
// Boolean ( nilai )
// Truthy -> true, non-zero number, "string", object, arrays, functions
// Falsy -> false, 0, "", undefined, null, NaN
console.log(Boolean(10));

// D. Variabel
// Deklarasi (daftar), Inisialisasi (pemesanan memori), Assigment (menetapkan nilai ke variabel)
// var, let. const


