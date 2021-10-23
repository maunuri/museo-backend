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
                id: req.params.userid
            },
        }).then((character) => {
            res.json(character);
        }).catch((err) => { //log any errors into console
            console.log(err)
        })
    }
}

module.exports = charactercontroller;
