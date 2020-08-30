import {connect} from '../database';

export async function getProfileByProfileEmail(profileEmail: string) {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileAtHandle, profileEmail,profileHash,profileName FROM profile WHERE profileEmail = :profileEmail';

const [rows] = await mysqlConnection.execute(mySqlSelectQuery, {profileEmail} )
return rows;

} catch(error) {
    console.log(error)
}
}