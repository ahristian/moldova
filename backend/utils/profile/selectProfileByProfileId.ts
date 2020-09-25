import {connect} from "../../src/database";

export async function selectProfileByProfileId(profileId: string) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT profileUserName, profileEmail FROM profile WHERE profileId = UUID_TO_BIN(:profileId)';
		const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId})
		return rows;
	} catch (error) {
		console.log(error)
	}
}
