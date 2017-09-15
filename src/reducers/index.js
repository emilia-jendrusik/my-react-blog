import {combineReducers} from 'redux';
import PostsReducer from './posts_reducer';
import AuthorReducer from './author_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	posts: PostsReducer,
	author: AuthorReducer,
	form: formReducer
});

export default rootReducer;