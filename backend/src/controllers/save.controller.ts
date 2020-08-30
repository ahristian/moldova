import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {Save} from "../../utils/interfaces/Save";
import {selectSave} from "../../utils/save/selectSave";
import {deleteSave} from "../../utils/save/deleteSave";
import {insertSave} from "../../utils/save/insertSave";

const {validationResult} = require('express-validator');

export async function toggleSaveController(request: Request, response: Response) {

    try {
        validationResult(request).throw();

        const {saveDestinationId} = request.body;

        const profile: Profile = request.session?.profile
        const saveProfileId = <string>profile.profileId

        const save: Save = {
            saveProfileId,
            saveDestinationId,

        }
        const select = await selectSave (save)
              if (select[0]){
            await deleteSave(save)
        }else{
            await insertSave(save)
        }

        const status: Status = {
            status: 200,
            data: null,
            message: 'Save successfully applied'
        };
        return response.json(status);

    } catch(error) {
        console.log(error);
    }
}