const Event = require('../models/eventModel');


exports.createEvent = async (req, res) => {
  try {
    const { name, date } = req.body;
    const newEvent = new Event({ name, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(id, { name, date }, { new: true });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
