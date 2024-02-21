
function submitForm() {
    const nama = document.getElementById('nama').value;
    const jumlahPilihan = document.getElementById('jumlahPilihan').value;

    // Validasi input
    if (nama === '' || jumlahPilihan === '') {
        alert('Silakan isi semua kolom');
        return;
    }
  
    // Buat array untuk menyimpan pilihan
    const pilihan = [];
    for (let i = 1; i <= jumlahPilihan; i++) {
      pilihan.push(`Pilihan ${i}`);
    }
  
    // Buat elemen HTML untuk pilihan
    const pilihanHtml = pilihan.map(pilihan => `<li>${pilihan}</li>`).join('');
  
    // Tampilkan pilihan di elemen hasil
    document.getElementById('hasil').innerHTML = `
      ${hasil}
      <ul>
        ${pilihanHtml}
      </ul>
    `;
  }
  