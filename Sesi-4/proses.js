// Algoritma Menghitung Luas dan Keliling Lingkaran

// Langkah 3a: Menerima input panjang jari-jari lingkaran
var r = parseFloat(prompt("Masukkan panjang jari-jari lingkaran: "));

// Langkah 3b: Menghitung luas lingkaran
var luas = Math.PI * r * r;

// Langkah 3c: Menghitung keliling lingkaran
var keliling = 2 * Math.PI * r;

// Langkah 4: Menampilkan hasil kalkulasi
console.log("Panjang jari-jari lingkaran: " + r);
console.log("Luas lingkaran: " + luas);
console.log("Keliling lingkaran: " + keliling);