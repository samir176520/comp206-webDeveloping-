import { check } from "express-validator";

export function dataValid () {
    return [
        check("userName").notEmpty().withMessage("userName is required"),
        check("password").notEmpty().withMessage("password shouldent be empty"),
        check("email").notEmpty().isEmail().withMessage("non valid email")
    ]
}