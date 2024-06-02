function kenaRazia(tanggal, data) {
  const tilangPerRute = {
    'Gajah Mada': 1,
    'Hayam Wuruk': 1,
    'Sisingamangaraja': 1,
    'Panglima Polim': 1,
    'Fatmawati': 1,
    'Tomang Raya': 1
  };

  const pelanggar = [];

  for (let i = 0; i < data.length; i++) {
    const orang = data[i];
    if (orang.type === "Mobil" && tanggal >= 27) {
      let jumlahTilang = 0;
      for (let j = 0; j < orang.rute.length; j++) {
        const rute = orang.rute[j];
        if (tilangPerRute[rute]) {
          jumlahTilang += tilangPerRute[rute];
        }
      }

      let existingPelanggar = null;
      for (let k = 0; k < pelanggar.length; k++) {
        if (pelanggar[k].name === orang.name) {
          existingPelanggar = pelanggar[k];
          break;
        }
      }

      if (existingPelanggar) {
        existingPelanggar.tilang += jumlahTilang;
      } else {
        pelanggar.push({ name: orang.name, tilang: jumlahTilang });
      }
    }
  }

  return pelanggar;
}

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
