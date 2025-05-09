import { check } from "express-validator";

export function dataValid () {
    return [
        check("userName").trim().notEmpty().withMessage("userName is required").isLength({min : 5, max : 30}).withMessage("user name at least 5 charcters"),
        check("password").trim().notEmpty().withMessage("password shouldent be empty"),
        check("email").notEmpty().isEmail().withMessage("non valid email")
    ]
}