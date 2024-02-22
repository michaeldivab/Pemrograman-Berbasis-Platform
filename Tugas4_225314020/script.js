function submitForm() {
  const nama = document.getElementById('nama').value;
  const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);

  // Validasi input
  if (nama.trim() === '' || isNaN(jumlahPilihan) || jumlahPilihan <= 0) {
    alert('Silakan isi semua kolom dengan benar');
    return;
  }

  // Buat array untuk menyimpan pilihan
  const pilihan = [];
  for (let i = 1; i <= jumlahPilihan; i++) {
    pilihan.push(`Pilihan ${i}`);
  }

  // Buat elemen HTML untuk pilihan
  const pilihanHtml = pilihan.map(pilihan => `<li><input type="text" placeholder="Masukkan teks pilihan ${pilihan}"></li>`).join('');

  // Tampilkan pilihan di elemen hasil
  let hasilHtml = `
    <p>Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu:</p>
    <ul>
      ${pilihanHtml}
    </ul>
    <br>
    <button type="submit" onclick="submitPilihan()">OK</button>
  `;

  document.getElementById('hasil').innerHTML = hasilHtml;
}

function submitPilihan() {
  const nama = document.getElementById('nama').value;
  const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
  const pilihan = document.querySelectorAll('#hasil ul li input');
  const pilihanTeks = Array.from(pilihan).map(pilihan => pilihan.value);

  // Validasi pilihan
  if (pilihanTeks.some(pilihan => pilihan.trim() === '')) {
    alert('Silakan isi semua kolom pilihan dengan benar');
    return;
  }

  // Tampilkan hasil dengan drop-down
  let pilihanDropdownHtml = `<p>Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu: ${pilihanTeks.join(', ')}, dan saya memilih:</p>`;
  pilihanDropdownHtml += `<p>Silakan pilih pilihan Anda:</p><select name="pilihan">`;
  pilihanDropdownHtml += `${pilihanTeks.map(pilihan => `<option value="${pilihan}">${pilihan}</option>`).join('')}</select><br><br>`;
  pilihanDropdownHtml += `<button type="submit" onclick="submitHasil()">OK</button>`;

  // Tampilkan hasil di elemen hasil
  document.getElementById('hasil').innerHTML = pilihanDropdownHtml;
}

function submitHasil() {
  const nama = document.getElementById('nama').value;
  const jumlahPilihan = parseInt(document.getElementById('jumlahPilihan').value);
  const pilihanTeks = document.querySelector('#hasil select[name="pilihan"]').value;

  // Validasi pilihan
  if (pilihanTeks.trim() === '') {
    alert('Silakan pilih salah satu pilihan');
    return;
  }

  // Tampilkan hasil akhir
  document.getElementById('hasil').innerHTML = `
    <p>Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu: ${pilihanTeks}, dan saya memilih ${pilihanTeks}</p>
  `;
}
