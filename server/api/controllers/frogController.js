const { Frog, Trait } = require("../../models");
const { traitsArray } = require("../../utils/variables/frog");

module.exports = {
    async createFrog(req, res) {
        try {
            // for populating the trait array in db if loading on a new db
            //await Trait.create(traitsArray)
            
            const possibleTraits = await Trait.find();
            const randomTraits = possibleTraits.sort(() => 0.5 - Math.random()).slice(0, 5);
            const frog = await Frog.create({
                traits: randomTraits
            });
            console.log(frog);
            res.json(frog);
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    },

    async allFrogs (req, res) {
        try {
            const frogs = await Frog.find().populate("traits");
            res.json(frogs)
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    },
}