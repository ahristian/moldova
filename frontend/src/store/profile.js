import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    getProfileById: (profile, action) => {
      const {payload} = action
      return payload
    }
  }
})
export const {getProfileById} = profileSlice.actions
export const fetchProfileById = (profileId) => async dispatch => {
  const {data} = await httpConfig(`/apis/profile/${profileId}`);
  dispatch(getProfileById(data))
}
export default profileSlice.reducer