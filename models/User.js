//Esto nos sirve para instanciar y iniciar el modelo
import mongoose from 'mongoose'
const {Schema, model} = mongoose

//dentro de van todas las configuraciones
const userSchema = new Schema({
    email: {
        type: String, /*tipo de dato */
        required: true, /*requerido */
        trim: true, /*limpia los campos */
        unique: true, /*tiene que ser unico el email*/
        lowercase: true, /* Se puede guardar en minusculas o mayusculas */
        index: { unique: true }, /* solo hacer en caso que sea para una aplicacion grande ya que ocupa muchos recursos */
    },

    password:{
        type: String,
        required: true,
    },

})

export const User = model('user', userSchema) //lo que esta en '' es como se va a guardar el modelo

