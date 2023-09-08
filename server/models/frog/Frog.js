const { Schema, model } = require("mongoose");

const frogSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        speed: {
            type: Number,
            required: true
        },
        jump: {
            type: Number,
            required: true
        },
        weirdness: {
            type: Number,
            required: true
        },
        luck: {
            //hidden attribute
            type: Number,
            required:true
        }
    },
    {
        timestamps: true,
    }
);

const Frog = model("frog", frogSchema);

module.exports = Frog;