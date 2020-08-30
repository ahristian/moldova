import {connect} from "../../src/database";
import {Save} from "../interfaces/Save";

export async function insertSave(save: Save) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'INSERT INTO `save` (saveDestinationId, saveProfileId) VALUES(UUID_TO_BIN(:saveDestinationId), UUID_TO_BIN(:saveProfileId))';
        const [rows] = await mySqlConnection.execute(mySqlDelete, save)
        return "Like successfully deleted"
    } catch(error) {
        console.log(error)
    }
}