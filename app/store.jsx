import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//action consts
const GET_USERNAME = 'GET_USERNAME'
const GET_EMAIL = 'GET_EMAIL'
const GET_NAME = 'GET_NAME'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_IMG  = 'GET_IMG'
const GET_DATA  = 'GET_DATA'
const GET_DATA1  = 'GET_DATA1'

//initial state
const initialState = {
	name    : [],
	username    : [],
	email   : '',
	password: '',
	campus  : '',
	data    : [],
	data1    : [],
	image: '',
}

// action creaetors

export function updateUsername( username ) {
	const action = { type: GET_USERNAME, username }
	return action
}
export function getData ( data ) {
	const action = { type: GET_DATA, data }
	return action
}

export function getData1 ( data1 ) {
	const action = { type: GET_DATA1, data1 }
	return action
}

export function getEmail( email ) {
	const action = { type: GET_EMAIL, email }
	return action
}

export function getName( name ) {
	const action = { type: GET_NAME, name }
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
			username: action.username
		})
	case GET_EMAIL:
		return Object.assign({}, state, {
			email: action.email
		})

	case GET_NAME:
		return Object.assign({}, state, {
			name: action.name
		})

	case GET_DATA:
		return Object.assign({}, state, {
			data: action.data
		})

	case GET_DATA1:
		return Object.assign({}, state, {
			data1: action.data1
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
