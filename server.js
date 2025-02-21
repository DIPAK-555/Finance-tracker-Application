require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error(' MongoDB Connection Error:', err));
mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));


// Define Mongoose Schema
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/items', async (req, res) => {
    try {
        const { name, price } = req.body;
        const newItem = new Item({ name, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
