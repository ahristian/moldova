import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import { fetchAllDestinationsByDestinationId } from './destinationPhoto'

const destinationSlice = createSlice({
  name: "destination",
  initialState: [],
  reducers: {
    getAllDestinations: (destinations, action) => {
      const {payload} = action
      return payload
    },
    getDestinationByDestinationId: (destination, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const {getAllDestinations, getDestinationByDestinationId} = destinationSlice.actions
export const fetchDestinationByDestinationId = () => async dispatch => {
  const {data} = await httpConfig(`/apis/destinations/`)
  dispatch(getDestinationByDestinationId(data))
}
export const fetchAllDestinations = () => async dispatch => {
  const {data} = await httpConfig(`/apis/destinations/`)
  dispatch(getAllDestinations(data))
}
export default destinationSlice.reducer