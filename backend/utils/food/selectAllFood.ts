
import {connect} from "../../src/database";
import {Profile} from "../interfaces/Profile";
import {Food} from "../interfaces/Food";

export async function selectAllFoods() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT foodTitle, foodContent, foodImageUrl FROM food";
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}