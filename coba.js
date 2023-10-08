// Identitas
const nama = prompt("Masukkan nama Anda:");
console.log(`Halo semua! Nama saya ${nama}! Ini adalah Contoh Program JavaScript saya.`);

// Contoh if-else
const angka = parseInt(prompt("Masukkan angka:"));
if (angka > 0) {
  console.log("Angka yang Anda masukkan adalah positif.");
} else if (angka < 0) {
  console.log("Angka yang Anda masukkan adalah negatif.");
} else {
  console.log("Anda memasukkan angka nol.");
}

// Contoh nested if
const usia = parseInt(prompt("Masukkan usia Anda:"));
if (usia >= 18) {
  if (usia < 60) {
    console.log("Anda adalah seorang dewasa.");
  } else {
    console.log("Anda adalah seorang dewasa dan senior.");
  }
} else {
  console.log("Anda masih di bawah umur.");
}

// Contoh switch case
const hari = prompt("Masukkan nama hari:");
switch (hari.toLowerCase()) {
  case "senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  case "rabu":
    console.log("Hari ini adalah Rabu.");
    break;
  case "kamis":
    console.log("Hari ini adalah Kamis.");
    break;
  case "jumat":
    console.log("Hari ini adalah Jumat.");
    break;
  case "sabtu":
    console.log("Hari ini adalah Sabtu.");
    break;
  case "minggu":
    console.log("Hari ini adalah Minggu.");
    break;
  default:
    console.log("Hari yang Anda masukkan tidak valid.");
}

// Contoh for statement
const jumlahIterasi = parseInt(prompt("Masukkan jumlah iterasi:"));
for (let i = 1; i <= jumlahIterasi; i++) {
  console.log(`Iterasi ke-${i}`);
}

// Contoh while
let counter = 1;
while (counter <= 5) {
  console.log(`While Loop ke-${counter}`);
  counter++;
}

// Contoh do while
let doWhileCounter = 1;
do {
  console.log(`Do-While Loop ke-${doWhileCounter}`);
  doWhileCounter++;
} while (doWhileCounter <= 5);

// Contoh function
function tambahkanDua(angka) {
  return angka + 2;
}

const angkaInput = parseInt(prompt("Masukkan angka untuk ditambahkan dua:"));
const hasilPenambahan = tambahkanDua(angkaInput);
console.log(`Hasil penambahan dua dari angka ${angkaInput} adalah ${hasilPenambahan}.`);
