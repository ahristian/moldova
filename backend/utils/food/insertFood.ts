
import {Food} from "../interfaces/Food";
import {connect} from "../../src/database";

export async function insertFood(food: Food) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO food(foodId, foodTitle, foodContent, foodImageUrl) VALUES(UUID_TO_BIN(UUID()), :foodTitle, :foodContent, :foodImageUrl)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, food)
        return "Destination created successfully"
    } catch (error) {
        console.log(error)
    }
}