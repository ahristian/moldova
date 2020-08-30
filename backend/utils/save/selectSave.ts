import {connect} from "../../src/database";
import {Save} from "../interfaces/Save";

export async function selectSave (save: Save) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(saveDestinationId) as saveDestinationId, BIN_TO_UUID(saveProfileId) as saveProfileId FROM `save` WHERE saveProfileId = UUID_TO_BIN(:saveProfileId)'
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, save)
        return rows;

    } catch(error) {
        console.log(error)
    }
}