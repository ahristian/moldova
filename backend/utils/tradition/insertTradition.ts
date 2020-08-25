
import {Tradition} from "../interfaces/Tradition";
import {connect} from "../../src/database";

export async function insertTradition(tradition: Tradition) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO tradition(traditionId, traditionTitle, traditionContent, traditionImageUrl) VALUES(UUID_TO_BIN(UUID()), :traditionTitle, :traditionContent, :traditionImageUrl)";

        const [Tradition] = await mySqlConnection.execute(mySqlQuery, tradition)
        return "Destination created successfully"
    } catch (error) {
        console.log(error)
    }
}