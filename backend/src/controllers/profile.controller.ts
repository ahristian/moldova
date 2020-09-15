import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectAllTraditions} from "../../utils/tradition/selectAllTradition";


export async function getAllTraditionController(request: Request, response: Response): Promise<Response | void>  {
    try {
        const data = await selectAllTraditions()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);

} catch(error) {
    console.log(error);
}
}



