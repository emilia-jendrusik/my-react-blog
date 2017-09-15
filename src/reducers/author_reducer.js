import {FETCH_AUTHOR} from '../actions';
import _ from 'lodash';
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_AUTHOR:
			return action.payload.data;
		default:
			return state;
	}
}