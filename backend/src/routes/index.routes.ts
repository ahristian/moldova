import {Router} from "express"
import {indexController} from '../controllers/index.controller'

export const IndexRoutes = Router()

IndexRoutes.route("/")
    .get(indexController)