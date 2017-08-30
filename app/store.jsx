import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//action consts
const GET_USERNAME = 'GET_USERNAME'
const GET_EMAIL = 'GET_EMAIL'
const GET_PASSWORD = 'GET_PASSWORD'
const GET_CAMPUS = 'GET_CAMPUS'

//initial state
const initialState = {
	name    : [],
	email   : '',
	password: '',
	campus  : '',
	data    : []
}

// action creaetors
export function updateUsername( name ) {
	const action = { type: GET_USERNAME, name }
	return action
}

export function getEmail( email ) {
	const action = { type: GET_EMAIL, email }
	return action
}

export function getPassword( password ) {
	const action = { type: GET_PASSWORD, password }
	return action
}

export function getCampus( campus) {
	const action = { type: GET_CAMPUS, campus }
	return action
}


//reducer
function reducers( state = initialState, action ) {

	switch (action.type) {

	case GET_USERNAME:
		return Object.assign({}, state, {
			name: action.name
		})
	case GET_EMAIL:
		return Object.assign({}, state, {
			email: action.email
		})

	case GET_PASSWORD:
		return Object.assign({}, state, {
			password: action.password
		})

	case GET_CAMPUS:
		return Object.assign({}, state, {
			campus: action.campus
		})
	default:
		return state
	}

}


//creating store & applying middlewear
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware,
	createLogger()
))
)

export default store
