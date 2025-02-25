import {  Router } from "express";
import authRouter from "./auth.routes";
import recipesRouter from "./recipes.routes";
const router = Router()

router.use('/auth',authRouter)
router.use('/recipes',recipesRouter)

export default router