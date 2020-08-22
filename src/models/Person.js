const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// Models

const PersonPfSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: Number,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  dateNasc: {
    type: Number,
    required: true
  },
  email: {
    type: String

  },
  telefone: {
    type: Number

  },
  photo: {
    type: String

  },
  location: {
    type: Array,
    required: true,
    endereco: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    complemento: {
      type: String

    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: Number

    }
  }
});
PersonPfSchema.plugin(mongoosePaginate);
mongoose.model('personpf', PersonPfSchema);

const PersonPjSchema = new mongoose.Schema({

  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: Number,
    required: true
  },
  email: {
    type: String

  },
  telefone: {
    type: Number

  },
  photo: {
    type: String

  },
  location: {
    type: Array,
    required: true,

    endereco: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    complemento: {
      type: String

    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    cep: {
      type: Number

    }

  }
});

PersonPjSchema.plugin(mongoosePaginate);

mongoose.model('personpj', PersonPjSchema);
