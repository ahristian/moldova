import {connect} from "../../src/database";
import {Save} from "../interfaces/Save";

export async function deleteSave(save: Save) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `save` WHERE saveProfileId = UUID_TO_BIN(:saveProfileId) AND saveDestinationId = UUID_TO_BIN(:saveDestinationId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, save)
        return "Like successfully deleted"
    } catch(error) {
        console.log(error)
    }
}