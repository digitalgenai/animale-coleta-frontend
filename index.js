import express from "express";
import cors from "cors";
import usuarioRoute from "./src/routes/usuarioRoute.js";
import concorrenteRoute from "./src/routes/concorrenteRoute.js";
import produtoRoute from "./src/routes/produtoRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('./uploads'));

app.use('/usuarios', usuarioRoute);
app.use('/concorrentes', concorrenteRoute);
app.use('/produtos', produtoRoute);


app.use((req, res) => {
    res.status(404).send({
        type: 'error',
        description: 'Rota não encontrada'
    })
});

app.listen(8000, () => {
    console.log('Server on: http://localhost:8000');
});