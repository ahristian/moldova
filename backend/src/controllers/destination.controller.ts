import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectAllDestinations} from "../../utils/destination/selectAllDestinations";
import {selectAllDestinationsByDestinationId} from "../../utils/destination/selectAllDestinationsByDestinationId";


export async function getAllDestinationsController(request: Request, response: Response): Promise<Response | void> {
    try {
        const data = await selectAllDestinations()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);

    } catch (error) {
        console.log(error);
    }
}
    export async function selectAllDestinationsByDestinationIdController(request: Request, response: Response) {
        try {
            const {destinationId} = request.params
            const result = await selectAllDestinationsByDestinationId(destinationId)
            return response.json({status: 200, data: result, message: null})
        } catch (error) {
            console.log(error)
        }
    }





