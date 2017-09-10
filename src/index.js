import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavBar from './components/Nav';
import Posts from './components/Posts';
import Author from './components/Author';
import NewPost from './components/NewPost';

import reducers from './reducers';

import './index.css';

/*const posts = [
  {id: 1, title: 'beautiful and inspiring workspaces', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', categories: ["work"]},
  {id: 2, title: 'healthy snacks', content: 'Integer non sapien varius, congue lacus et, dignissim odio.', categories: ["fitness"]},
  {id: 3, title: 'new outdoor activities', content: 'Aenean id sem ac quam fringilla lobortis non vel eros.', categories: ["fitness", "self-improvement"]},
  {id: 4, title: 'fast reading 101', content: 'Nullam varius ligula viverra risus ornare tempor.', categories: ["self-improvement"]},
  {id: 5, title: 'plan your week - fast', content: 'Aenean eget erat ut eros semper venenatis.',categories: ["self-improvement","work"]},
  {id: 6, title: 'say no to procrastination', content: 'Fusce pretium urna sit amet vulputate finibus.',categories: ["self-improvement"]}
];*/
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
			<NavBar />
			<div className='col-md-8'>
				<Switch>
					<Route path='/posts/new' component={NewPost} />
					<Route path='/' component={Posts} />
				</Switch>
			</div>
			<Author />
			</div>
		</BrowserRouter>
	</Provider>, 
document.getElementById('root'));

