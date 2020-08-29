import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectAllDestinations} from "../../utils/destination/selectAllDestinations";
/*
const {validationResult} = require('express-validator');*/

export async function getAllDestinationsController(request: Request, response: Response): Promise<Response | void>   {
    try {
        const data = await selectAllDestinations()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);

} catch(error) {
    console.log(error);
}
}



