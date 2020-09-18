import {combineReducers} from 'redux'
import destinations from './destination'
import traditions from './tradition'
import foods from './food'
import profile from './profile'
import destinationsProfile from './destinationByProfileId'
import destinationPhotos from './destinationPhoto'
import auth from "./auth"


export default combineReducers({traditions, profile, destinations, destinationsProfile, foods, destinationPhotos, auth})