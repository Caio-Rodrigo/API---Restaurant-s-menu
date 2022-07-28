const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const ItensSchema = new mongoose.Schema ({
    name:{type: String, required: true},
    description:{ type: String, required: true},
    url:{type: String, required: true}

});

const Itens = mongoose.model ('Menu', ItensSchema);

module.exports = Itens;
