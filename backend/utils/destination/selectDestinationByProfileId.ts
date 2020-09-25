import {connect} from "../../src/database";

export async function selectDestinationByProfileId(profileId: string) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT BIN_TO_UUID(saveProfileId) AS saveProfileId, BIN_TO_UUID(destinationId) AS destinationId, destinationDescription, destinationLocation, destinationTitle, destinationImage FROM destination INNER JOIN `save` ON destination.destinationId = save.saveDestinationId WHERE saveProfileId = UUID_TO_BIN(:profileId)';
		const [rows] = await mySqlConnection.execute(mySqlQuery, {profileId})
		return rows;
	} catch (error) {
		console.log(error)
	}
}
