import {connect} from "../../src/database";

export async function selectAllDestinations() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT  BIN_TO_UUID(destinationId) AS destinationId, destinationContact, destinationDescription, destinationLocation, destinationLat, destinationLong, destinationTitle, destinationImage FROM destination";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}