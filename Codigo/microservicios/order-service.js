const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
const pedidos = [];

app.post('/pedidos', async (req, res) => {
    const { productoId, cantidad } = req.body;

    try {
        // 1. Pide el producto al otro microservicio (puerto 3001)
        const { data: producto } = await axios.get(`http://localhost:3001/productos/${productoId}`);

        // 2. Registra el pedido si el producto existe
        const nuevoPedido = {
            id: pedidos.length + 1,
            producto: producto.nombre,
            cantidad,
            total: producto.precio * cantidad
        };

        pedidos.push(nuevoPedido);
        res.status(201).json({ mensaje: 'Pedido creado', pedido: nuevoPedido });

    } catch (error) {
        if (error.response?.status === 404) {
            return res.status(404).json({ error: 'El producto no existe' });
        }
        res.status(500).json({ error: 'Error de comunicación' });
    }
});

app.listen(3002, () => console.log('Order Service en puerto 3002'));

