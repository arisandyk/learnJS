var nama = prompt('Masukkan Nama: ');
var buttonKonfirmasi = confirm('Kamu yakin??'); // Tipe Boolean, true kalau ok, false kalau cancel
if (buttonKonfirmasi === true) {
    alert(nama);
} else {
    alert('Gagal memuat nama');
}
alert(nama);