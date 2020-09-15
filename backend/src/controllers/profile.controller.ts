import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";


export async function getProfileByIdController(request: Request, response: Response): Promise<Response | void>  {
    try {
        const {profileId} = request.params
        const data = await selectProfileByProfileId(profileId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);

} catch(error) {
    console.log(error);
}
}



