
import {Destination} from "../interfaces/Destination";
import {connect} from "../../src/database";

export async function insertDestination(destination: Destination) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO destination(destinationId, destinationContact, destinationDescription, destinationLocation, destinationTitle, destinationImage) VALUES(UUID_TO_BIN(UUID()), :destinationContact, :destinationDescription, :destinationLocation, :destinationTitle, :destinationImage)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, destination)
        return "Destination created successfully"
    } catch (error) {
        console.log(error)
    }
}