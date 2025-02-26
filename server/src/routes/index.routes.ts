import {  Router } from "express";
import authRouter from "./auth.routes";
import recipesRouter from "./recipes.routes";
import uploadRouter from "./update.routes";
const router = Router()

router.use('/auth',authRouter)
router.use('/recipes',recipesRouter)
router.use('/upload',uploadRouter)

export default router