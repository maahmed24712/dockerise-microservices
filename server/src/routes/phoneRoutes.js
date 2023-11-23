const express = require('express');
const router = express.Router();
const PhoneModel = require('../models/phoneModel');

// Create a new phone model
router.post('/', async (req, res) => {
  try {
    const newPhone = new PhoneModel(req.body);
    const result = await newPhone.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read all phone models
router.get('/', async (req, res) => {
  try {
    const phones = await PhoneModel.find();
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read a specific phone model by ID
router.get('/:id', async (req, res) => {
  try {
    const phone = await PhoneModel.findById(req.params.id);
    if (!phone) {
      return res.status(404).json({ error: 'Not Found' });
    }
    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a phone model by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPhone = await PhoneModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPhone) {
      return res.status(404).json({ error: 'Not Found' });
    }
    res.json(updatedPhone);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a phone model by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPhone = await PhoneModel.findByIdAndDelete(req.params.id);
    if (!deletedPhone) {
      return res.status(404).json({ error: 'Not Found' });
    }
    res.json(deletedPhone);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
