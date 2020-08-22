const mongoose = require('mongoose');

const Person = mongoose.model('personpj');
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const persons = await Person.paginate({}, { page, limit: 10 });
    return res.json(persons);
  },

  async show(req, res) {
    const person = await Person.findById(req.params.id);

    return res.json(person);
  },

  async creat(req, res) {
    const person = await Person.create(req.body);

    return res.json(person);
  },

  async update(req, res) {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(person);
  },

  async destroy(req, res) {
    const person = await Person.findByIdAndDelete(req.params.id);

    return res.json(person);
  }

};
const Personpf = mongoose.model('personpf');

module.exports = {

  async index(req, res) {
    const { page = 1 } = req.query;

    const persons = await Personpf.paginate({}, { page, limit: 10 });

    return res.json(persons);
  },

  async show(req, res) {
    const person = await Personpf.findById(req.params.id);

    return res.json(person);
  },

  async creat(req, res) {
    const person = await Personpf.create(req.body);

    return res.json(person);
  },

  async update(req, res) {
    const person = await Personpf.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(person);
  },

  async destroy(req, res) {
    const person = await Personpf.findByIdAndDelete(req.params.id);

    return res.json(person);
  }
};
