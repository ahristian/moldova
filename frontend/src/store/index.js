import {combineReducers} from 'redux'
import destinations from './destination'
import traditions from './tradition'
import foods from './food'
import profiles from './profile'
import destinationPhotos from './destinationPhoto'


export default combineReducers({traditions, profiles, destinations, foods, destinationPhotos})