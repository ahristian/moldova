import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectAllFoods} from "../../utils/food/selectAllFood";
/*
const {validationResult} = require('express-validator');*/

export async function getAllTraditionController(request: Request, response: Response): Promise<Response | void>  {
    try {
        const data = await selectAllFoods()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);

} catch(error) {
    console.log(error);
}
}



