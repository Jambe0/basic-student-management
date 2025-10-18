$(document).ready(function() {
  $('#tambah').click(function() {
    const nama = $('#nama').val();
    const nim = $('#nim').val();
    const jurusan = $('#jurusan').val();

    if (nama === '' || nim === '' || jurusan === '') {
      alert('Semua kolom harus diisi!');
      return;
    }

    const baris = `
      <tr>
        <td>${nama}</td>
        <td>${nim}</td>
        <td>${jurusan}</td>
        <td><button class="hapus">Hapus</button></td>
      </tr>
    `;

    $('#tabelMahasiswa tbody').append(baris);

    $('#nama').val('');
    $('#nim').val('');
    $('#jurusan').val('');
  });

  $('#tabelMahasiswa').on('click', '.hapus', function() {
    $(this).closest('tr').remove();
  });
});
