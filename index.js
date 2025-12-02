const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@admin.com" && password === "123456") {
    return res.json({ token: "token-falso-123" });
  }

  return res.status(401).json({ error: "Credenciales inválidas" });
});

app.listen(3000, () => console.log("Backend corriendo en http://localhost:3000"));
