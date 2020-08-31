
import {connect} from "../../src/database";

export async function selectAllDestinations(destinationId: string) {
    try {

        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT  BIN_TO_UUID(destinationId) AS destinationId, destinationContact, destinationDescription, destinationLocation, destinationTitle, destinationImageUrl FROM destination WHERE destinationId = UUID_TO_BIN(:destinationId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, {destinationId})
        return rows;
    } catch (error) {
        console.log(error)
    }
}