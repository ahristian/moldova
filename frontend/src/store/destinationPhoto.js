
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const destinationsPhotoSlice = createSlice({
  name: "destinationsPhoto",
  initialState: [],
  reducers: {
    getAllDestinationsByDestinationId: (destinationsPhoto, action) => {
      const {payload} = action
      return payload
    }
  }
})
export const {getAllDestinationsByDestinationId} = destinationsPhotoSlice.actions
export const fetchAllDestinationsByDestinationId = (destinationId) => async dispatch => {
  const {data} = await httpConfig(`/apis/destinations/${destinationId}/`);
  dispatch(getAllDestinationsByDestinationId(data))
}
export default destinationsPhotoSlice.reducer