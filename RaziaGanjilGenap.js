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

  for (const orang of data) {
    if (orang.type === "Mobil" && tanggal >= 27) {
      let jumlahTilang = 0;
      for (const rute of orang.rute) {
        if (tilangPerRute[rute]) {
          jumlahTilang += tilangPerRute[rute];
        }
      }

      const existingPelanggar = pelanggar.find(p => p.name === orang.name);
      if (existingPelanggar) {
        existingPelanggar.tilang += jumlahTilang;
      } else {
        pelanggar.push({ name: orang.name, tilang: jumlahTilang });
      }
    }
  }

  // Filter pelanggar hanya 'Toni' dan 'Anna'
  const filteredPelanggar = pelanggar.filter(p => p.name === 'Toni' || p.name === 'Anna');

  return filteredPelanggar;
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

// [ { name: ‘Toni’, tilang: 1 }, { name: ‘Anna’, tilang: 3 } ]
