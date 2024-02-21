function submitForm() {
    const nama = document.getElementById('nama').value;
    const jumlahPilihan = document.getElementById('jumlahPilihan').value;

    // Validasi input
    if (nama === '' || jumlahPilihan === '') {
        alert('Silakan isi semua kolom');
        return;
    }

    // Tampilkan hasil
    const hasil = `
        Nama: ${nama}
        <br>
        Jumlah Pilihan: ${jumlahPilihan}
    `;

    document.getElementById('hasil').innerHTML = hasil;
}
