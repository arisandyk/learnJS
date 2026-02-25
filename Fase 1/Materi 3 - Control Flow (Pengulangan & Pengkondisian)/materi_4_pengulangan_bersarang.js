var bintang = "";
for (let i = 10; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    bintang += "*";
  }
  bintang += '\n';
}

console.log(bintang);
