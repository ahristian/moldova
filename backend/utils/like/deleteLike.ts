import {Destination} from "../interfaces/Destination";
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";

export async function deleteLike(like: Like) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeDestinationId = UUID_TO_BIN(:likeDestinationId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, like)
        return "Like successfully deleted"
    } catch(error) {
        console.log(error)
    }
}