const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const ItensSchema = new mongoose.Schema ({
    nome:{type: String, required: true},
    descricao:{ type: String, required: true},
    url:{type: String, required: true}

});

const Itens = mongoose.model ('Menu', ItensSchema);

module.exports = Itens;