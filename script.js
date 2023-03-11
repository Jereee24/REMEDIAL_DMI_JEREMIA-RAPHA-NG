var tanya = true;
while( tanya ) {

    var p = prompt('Pilih : Batu, Gunting, Kertas');

    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'Batu';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'Gunting';
    } else {
        comp = 'Kertas';
    }

    var hasil = '';
    if( p == comp ) {
        hasil = 'SERI!';
    } else if( p == 'Batu' ) {
        hasil = ( comp == 'Kertas' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'Gunting' ) {
        hasil = ( comp == 'Batu' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'Kertas' ) {
        hasil = ( comp == 'Gunting' ) ? 'KALAH' : 'MENANG!';
    } else {
        hasil = 'Masukan Pilihan Yang Benar!';
    }

    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + 'Maka hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain.');