
import {connect} from "../../src/database";

export async function selectAllDestinationsByDestinationId(destinationId:string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT  BIN_TO_UUID(destinationId) AS destinationId, destinationContact, destinationDescription, destinationLocation, destinationTitle, destinationPhotoUrl FROM destination LEFT JOIN destinationPhoto ON destination.destinationId = destinationPhoto.destinationPhotoDestinationId WHERE destinationId = UUID_TO_BIN(:destinationId) ";
        const [rows] = await mySqlConnection.execute(mySqlQuery, {destinationId})
        return rows;
    } catch (error) {
        console.log(error)
    }
}