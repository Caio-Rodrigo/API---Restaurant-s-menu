
const mogoose = require('mongoose');

const ItensSchema = new mogoose.Schema ({
    name:{type: String, required: true},
    description:{ type: String, required: true},
    image:{type: String, required: true}

});

const Itens = mogoose.model('Menu', ItensSchema);

module.exports = Itens;
