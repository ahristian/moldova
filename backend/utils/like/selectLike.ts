import {Destination} from "../interfaces/Destination";
import {connect} from "../../src/database";
import {Like} from "../interfaces/Like";

export async function selectLike(like: Like) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeProfileId) as likeProfileId, BIN_TO_UUID(likeDestinationId) as likeDestinationId, likeDate FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likeDestinationId = UUID_TO_BIN(:likeDestinationId)';
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, like)
        return rows;

    } catch(error) {
        console.log(error)
    }
}