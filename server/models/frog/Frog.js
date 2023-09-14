const { Schema, model } = require("mongoose");
const { names } = require("../../utils/variables/names");

const frogSchema = new Schema(
    {
        name: {
            type: String,
            // required: true,
            // default: "Frog"
        },
        age: {
            type: Number,
            required: true,
            default: 10,
        },
        hitpoints: {
            type: Number,
            required: true,
            default: 3,
        },
        hunger: {
            type: Number,
            required: true,
            default: 10,
        },
        happiness: {
            type: Number,
            required: true,
            default: 6,
        },
        luck: {
            type: Number,
            required: true,
            default: 0,
        },
        traits: [{ type: Schema.Types.ObjectId, ref: "trait" }],
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);

frogSchema.pre("save", function (next) {
    if (this.isNew) {
        this.name = names[Math.floor(Math.random() * names.length)];
        this.luck = Math.floor(Math.random() * 6);
        this.age = Math.floor(Math.random() * 15) + 1;
        next();
    }
});

frogSchema.virtual("attributes").get(function () {
    const baseLevel = 5;
    attributes = {
        speed: baseLevel,
        strength: baseLevel,
        jump: baseLevel,
        will: baseLevel,
        intelligence: baseLevel,
        diplomacy: baseLevel,
        stealth: baseLevel,
        alignment: 10,
        armour: 0,
        bonusVsToad: 0,
        diplomacyToad: 0,
        bonusVsMouse: 0,
        diplomacyMouse: 0,
        bonusVsNewt: 0,
        diplomacyNewt: 0,
        //TODO: bonus attributes for other critters
    };
    this.traits.forEach((trait) => {
        trait.modifiers.forEach((mod) => {
            attributes[mod.attributeName] += mod.value;
        });
    });
    const mappedAttributes = {
        //TODO: better descriptions
        coreAttributes: {
            speed: {
                description: "Speed determines how fast a frog is.",
                value: attributes.speed,
            },
            strength: {
                description: "Strength determies how strong a frog is.",
                value: attributes.strength,
            },
            jump: { 
                description: "Hoppity hop power.", 
                value: attributes.jump 
            },
            will: {
                description: "A Frog's will power.",
                value: attributes.will,
            },
            intelligence: {
                description: "Clever girl.",
                value: attributes.intelligence,
            },
            diplomacy: {
                description: "How well a frog communicates with fellow frogs and other critter",
                value: attributes.diplomacy,
            },
            stealth: { 
                description: "Sneaky", 
                value: attributes.stealth 
            },
            alignment: {
                description: "Some frogs are paragons of virtue, others not so much.",
                value: attributes.alignment,
            },
        },
        bonus: {
            combat: {
                bonusVsToad: attributes.bonusVsToad,
                bonusVsMouse: attributes.bonusVsMouse,
                bonusVsNewt: attributes.bonusVsNewt,
                armour: attributes.armour,
            },
            diplomacy: {
                diplomacyToad: attributes.diplomacyToad,
                diplomacyMouse: attributes.diplomacyMouse,
                diplomacyNewt: attributes.diplomacyNewt,
            },
        },
    };
    return mappedAttributes;
});

const Frog = model("frog", frogSchema);

module.exports = Frog;
