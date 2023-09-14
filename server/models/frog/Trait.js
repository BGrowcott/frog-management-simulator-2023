const { Schema, model } = require("mongoose");

const traitSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        modifiers: {
            type: [],
            required: true
        }
    },
);

const Trait = model("trait", traitSchema);

module.exports = Trait;