import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchPosts} from '../actions';

import Post from './Post';

class Posts extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render () {
		const postsData = this.props.posts;
		if (!postsData) {
			return <div>Loading</div>
		}
		const postEls = _.map(postsData, (el) =>
			<Post postData={el} key={el.id} />
		)
		return (
			<div className='col-md-8'>{postEls}</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, {fetchPosts})(Posts);