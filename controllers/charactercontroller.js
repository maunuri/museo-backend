const Character = require('../models/Character');

const charactercontroller = {
    findAllCharacters: (req, res) => { //find all characters from database
        Character.findAll().then((character) => {
            res.json(character);
        }).catch((err) => { //log any errors into console
            console.log(err)
        })
    },
    findCharacter: (req, res) => { // find a specific character by id
        Character.findOne({
            where: {
                id: req.params.id
            },
        }).then((character) => {
            res.json(character);
        }).catch((err) => { //log any errors into console
            console.log(err)
        })
    },
    createCharacter: (req, res) => { // create a new character
         Character.create({
             head: req.body.head,
             torso: req.body.torso,
             legs: req.body.legs,
             theme: req.body.theme
         })
         .then((character) => {
             res.json(character);
         })
         .catch((err) => {
         console.log(err);
         return res.status(500).send("An error occurred");
         })
    }
}

module.exports = charactercontroller;
