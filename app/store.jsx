import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//action consts
const GET_USERNAME = 'GET_USERNAME'
const GET_EMAIL = 'GET_EMAIL'
const GET_PASSWORD = 'GET_PASSWORD'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_IMG  = 'GET_IMG'
const GET_DATA  = 'GET_DATA'

//initial state
const initialState = {
	name    : [],
	email   : '',
	password: '',
	campus  : '',
	data    : [],
	image: '',
}

// action creaetors
export function updateUsername( name ) {
	const action = { type: GET_USERNAME, name }
	return action
}
export function getData ( data ) {
	const action = { type: GET_DATA, data }
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

export function getImg( image ) {
	const action = { type: GET_IMG , image }
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

	case GET_DATA:
		return Object.assign({}, state, {
			data: action.data
		})

	case GET_CAMPUS:
		return Object.assign({}, state, {
			campus: action.campus
		})
	case GET_IMG:
		return Object.assign({}, state, {
			image: action.image
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
