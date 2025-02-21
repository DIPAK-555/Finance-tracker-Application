const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    const { description, amount, type, category } = req.body;
    try {
        const newTransaction = new Transaction({
            user: req.user.id,
            description,
            amount,
            type,
            category
        });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
