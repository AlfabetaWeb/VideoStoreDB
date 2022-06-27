

const { User } = require('../models/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let authConfig = require('../config/auth');

//UserController object declaration
const UserController = {};

UserController.getUser = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    User.findAll()
    .then(data => {
    
        res.send(data)
    });
};

UsersController.postUser = async (req, res) => {

    let name = req.body.name;
    let dni = req.body.dni;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    User.create({
        name: name,
        dni: dni,
        password: password
    }).then(user => {
        res.send(`${user.name}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });
    
    
};

UserController.loginUser = (req, res) => {

    let documentation = req.body.dni;
    let key = req.body.password;

    
    User.findOne({
        where : {dni : documentation}

    }).then(userFound => {

        if(userFound?.dataValues.id == null){
            res.send("Usuario o password incorrectos");
        } else {
            // if( bcrypt.compareSync(clave, usuarioEncontrado.password)){
                //Ahora ya si hemos comprobado que el usuario existe (email es correcto) y el password SI corresponde a ese usuario

                //generamos el token, pasándole como primer argumento el usuarioEncontrado, segundo argumento es la frase secreta.
                let token = jwt.sign({ user: userFound }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                console.log(token);
                
                let loginOKmessage = `Welcome again ${userFound.name}`
                res.json({
                    loginOKmessage,
                    user: userFound,
                    token: token
                })
            // };
        };

    }).catch(err => console.log(err));
};

//Export
module.exports = UserController;