
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const destinationsProfileSlice = createSlice({
  name: "destinationsProfile",
  initialState: [],
  reducers: {
    destinationsProfile: (destinationsProfile, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const {getAllDestinationsProfile} = destinationsProfileSlice.actions
export const fetchDestinationProfile = (profileId) => async dispatch => {
  const {data} = await httpConfig(`/apis/profile/destinations/${profileId}`);
  dispatch(getAllDestinationsProfile(data))
}
export default destinationsProfileSlice.reducer