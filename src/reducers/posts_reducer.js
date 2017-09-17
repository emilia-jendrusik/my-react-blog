import {FETCH_POSTS, SEND_POST} from '../actions';
import _ from 'lodash';
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return action.payload.data.items;
		case SEND_POST:
			console.log(action.payload);
			return state;
		default:
			return state;
	}
}