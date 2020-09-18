import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {selectDestinationByProfileId} from "../../utils/destination/selectDestinationByProfileId";


export async function getProfileByIdController (request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectProfileByProfileId (profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}
export async function getDestinationByProfileIdController (request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectDestinationByProfileId (profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}


