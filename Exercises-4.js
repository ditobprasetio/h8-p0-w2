var hari = 30; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(bulan) {
case 1 :
  bulan = 'Januari';
  break;
case 2 :
  bulan = 'Februari';
  break;
case 3 :
  bulan = 'Maret';
  break;
case 4 :
  bulan = 'April';
  break;
case 5 :
  bulan = 'Mei';
  break;
case 6 :
  bulan = 'Juni';
  break;
case 7 :
  bulan = 'Juli';
  break;
case 8 :
  bulan = 'Agustus';
  break;
case 9 :
  bulan = 'September';
  break;
case 10 :
  bulan = 'Oktober';
  break;
case 11 :
  bulan = 'November';
  break;
case 12 :
  bulan = 'Desember';
  break;
}


if ((tahun % 4 === 0) && (tahun % 100 !== 0 || tahun % 100 === 0 || tahun % 400 === 0) && (hari >= 1) && (hari <= 29) && (bulan === 'Februari') && (tahun >= 1900) && (tahun <= 2200)) {
  console.log(`${hari} ${bulan} ${tahun}`);
} 
else if ((hari >= 1) && (hari <= 28) && (bulan === 'Februari') && (tahun >= 1900) && (tahun <= 2200)) {
  console.log(`${hari} ${bulan} ${tahun}`);
} 
else if ((hari >= 1) && (hari <= 31) && (bulan === 'Januari' || bulan === 'Maret' || bulan === 'Mei' || bulan === 'Juli' || bulan === 'Agustus' || bulan === 'Oktober' || bulan === 'Desember' ) && (tahun >= 1900) && (tahun <= 2200)) {
  console.log(`${hari} ${bulan} ${tahun}`);
} 
else if ((hari >= 1) && (hari <= 30) && (bulan === 'April' || bulan === 'Juni' || bulan === 'September' || bulan === 'November' ) && (tahun >= 1900) && (tahun <= 2200)) {
  console.log(`${hari} ${bulan} ${tahun}`);
} 
else {
  console.log('periksa format tanggal');
}