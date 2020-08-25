import {Destination} from "../interfaces/Destination";
import {connect} from "../../src/database";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";

export async function selectAllDestinations() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT destinationContact, destinationDescription, destinationLocation, destinationTitle, destinationImageUrl FROM destination";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}