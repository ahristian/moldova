
import {connect} from "../../src/database";

export async function selectProfileByProfileEmail(profileEmail: string) {
	try {
		const mysqlConnection = await connect();
		
		const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileEmail, profileHash, profileUserName FROM profile WHERE profileEmail = :profileEmail', {profileEmail});
		
		// @ts-ignore is required so that rows can be interacted with save the array it is
		return rows.length !== 0 ? {...rows[0]} : undefined;
	} catch (e) {
		console.error(e)
		return undefined
	}
}
