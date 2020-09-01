import {connect} from "../../src/database";
import {Save} from "../interfaces/Save";

export async function insertSave(save: Save) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'INSERT INTO `save` (saveDestinationId, saveProfileId) VALUES(UUID_TO_BIN(:saveDestinationId), UUID_TO_BIN(:saveProfileId))';
        const [rows] = await mySqlConnection.execute(mySqlQuery, save)
        return "Save successfully posted"
    } catch(error) {
        console.log(error)
    }
}