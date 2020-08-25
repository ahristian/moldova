import {Tradition} from "../interfaces/Tradition";
import {connect} from "../../src/database";
import {Profile} from "../interfaces/Profile";

export async function selectAllTraditions() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT  traditionTitle, traditionContent, traditionImageUrl FROM tradition";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}