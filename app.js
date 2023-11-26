const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const data = [
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
];

app.get("/api", (req, res) => {
  res.json(data);
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id;
  const foundData = data.find(item => item.id === parseInt(id));
  
  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
