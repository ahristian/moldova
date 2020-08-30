import {connect} from "../../src/database";

export async function selectProfileByProfileActivationToken(profileActivationToken: string) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileAtHandle, profileEmail, profileHash, profileName FROM profile WHERE profileActivationToken = :profileActivationToken';
        const [rows] = await mysqlConnection.execute(mySqlSelectQuery, {profileActivationToken} )
        return rows;

    } catch(error) {
        console.log(error)
    }
}