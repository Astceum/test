import Usuarios from "../models/user.model.js"; //TODO
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const userFound = await Usuarios.findOne({email})
        if (userFound) 
        return res.status(400).json(["El Correo ya existe."])

        const passwordHash = await bcrypt.hash(password, 10)
        const newUsuarios = new Usuarios({ //TODO
        name,
        email,
        password: passwordHash,
    })
    const userSaved = await newUsuarios.save()
    const token = await createAccessToken({id: userSaved._id}) //TODO
    res.cookie('token', token)
    res.json({
       id: userSaved._id,
       name: userSaved.name,
       email: userSaved.email,
    })
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }  
}  

export const login = async (req, res) => {
    const {name, password} = req.body
    try {
        const userFound = await Usuarios.findOne({name})
        if(!userFound) return res.status(400).json({msg: "Usuario no encontrado"})
        
        const inMatch = await bcrypt.compare(password, userFound.password)
        if(!inMatch) return res.status(400).json({msg: "Contraseña incorrecta"})

    const token = await createAccessToken({id: userFound._id}) //TODO
    res.cookie('token', token)
    res.json({
       id: userFound._id,
       name: userFound.name,
       email: userFound.email,
    })
    } catch (error) {
        res.status(500).json({msg: error.msg});
    }  
} 


export const logout = (req, res) => {
    res.cookie('token', "",{
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
  
export const profile = async (req, res) => {
    const userFound = await Usuarios.findById(req.user.id)

    if(!userFound) return res.status(400).json({msg: 'Usuario no encontrado'})
    return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
    })
    res.send('profile')
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({ msg: 'No Autorizado'})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({msg: 'No Autorizado'});

        const userFound = Usuarios.findById(user.id)
        if (!userFound) return res.status(401).json({msg: 'No Autorizado'});

        return res.json({
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
        })
    })
}

