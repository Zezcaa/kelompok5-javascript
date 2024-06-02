function kenaRazia(date, data) {
  const lokasiGanjilGenap = [
    'Gajah Mada',
    'Hayam Wuruk',
    'Sisingamangaraja',
    'Panglima Polim',
    'Fatmawati',
    'Tomang Raya'
  ];

  const hasilPelanggaran = [];

  for (let i = 0; i < data.length; i++) {
    const kendaraan = data[i];

    // Cek apakah kendaraan adalah mobil
    if (kendaraan.type !== 'Mobil') {
      continue;
    }

    // Ambil nomor plat terakhir
    const nomorPlat = kendaraan.plat;
    const digitTerakhir = parseInt(nomorPlat[nomorPlat.length - 1]);

    // Cek ganjil atau genap
    const platGanjil = digitTerakhir % 2 !== 0;
    const tanggalGanjil = date % 2 !== 0;

    let countPelanggaran = 0;

    // Cek apakah lokasi termasuk dalam aturan ganjil-genap
    for (let j = 0; j < kendaraan.rute.length; j++) {
      const lokasi = kendaraan.rute[j];

      for (let k = 0; k < lokasiGanjilGenap.length; k++) {
        if (lokasi === lokasiGanjilGenap[k]) {
          if ((platGanjil && !tanggalGanjil) || (!platGanjil && tanggalGanjil)) {
            countPelanggaran++;
          }
          break;
        }
      }
    }

    if (countPelanggaran > 0) {
      hasilPelanggaran.push({
        name: kendaraan.name,
        tilang: countPelanggaran
      });
    }
  }

  return hasilPelanggaran;
}

// Contoh penggunaan:
console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang"
      ]
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada"
      ]
    }
  ])
);

// Output yang diharapkan: [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
