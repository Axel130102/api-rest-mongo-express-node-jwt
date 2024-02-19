import express from 'express'
import { login, register } from '../controllers/auth.controller.js';
import {body} from 'express-validator'
import { validationResultExpress } from '../middlewares/validationResultExpress.js';

const router = express.Router()

router.post('/register', [
    body('email', 'Formato de email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    
    body('password', 'La contraseña debe tener al menos 5 caracteres')
        .trim()
        .isLength({min: 5}),

    body('password', 'Contraseña incorrecta ')
        .custom((value, {req}) => {
            if(value !== req.body.confirmPassword){
                throw new Error('Las contraseñas no coinciden')
            }
            return value
        })

],
validationResultExpress,
register
)

router.post('/login', [
    body('email', 'Formato de email incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    
    body('password', 'La contraseña debe tener al menos 5 caracteres')
        .trim()
        .isLength({min: 5}),
],
validationResultExpress,
login 
);


export default router;