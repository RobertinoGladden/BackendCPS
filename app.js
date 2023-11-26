const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      provinsi: "Banten",
      kota: "Serang",
      kecamatan: "Pipitan",
      desa: "Walantaka"
    },
    {
      id: 2,
      provinsi: "Jawa Barat",
      kota: "Bandung",
      kecamatan: "Dayeuhkolot",
      desa: "Sukabirus"
    },
  ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
