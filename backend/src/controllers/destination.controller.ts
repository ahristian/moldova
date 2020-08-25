import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Destination} from '../../utils/interfaces/Destination';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {selectAllDestinations} from "../../utils/destination/selectAllDestinations";

const {validationResult} = require('express-validator');

export async function getAllTweetsController(request: Request, response: Response): Promise<Response | void> {
    try {
        const profile: Profile | string = request.session?.profile ?? "No user signed in";
        const data = await selectAllDestinations()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}


