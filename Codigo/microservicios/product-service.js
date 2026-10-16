const express = require('express');
const app = express();
const PORT = 3001;

const productos = [
    { id: 1, nombre: 'Laptop Gamer', precio: 1200 },
    { id: 2, nombre: 'Audífonos Inalámbricos', precio: 80 },
    { id: 3, nombre: 'Teclado', precio: 60 }

];

app.get('/productos/:id', (req, res) => {
    const productoId = parseInt(req.params.id);
    const producto = productos.find(p => p.id === productoId);

    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
});

app.listen(PORT, () => {
    console.log(`Product Service corriendo en http://localhost:${PORT}`);
});
