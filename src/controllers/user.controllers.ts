import express from "express";
import { createAcc, logIn } from "../service/user.service";

export const signUp = async (req:any, res:any) => {
    try {
        const signUp = await createAcc(req.body);
        res.status(201).json(signUp);
    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
}

export const login = async (req:any, res:any) => {
    try {
        const login = await logIn(req.body);
        res.status(200).json(login)
    } catch (error) {
         res.status(500).json({error : "Internal server error"});
    }
}