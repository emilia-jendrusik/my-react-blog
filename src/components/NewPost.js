import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {sendPost} from '../actions';

class NewPost extends Component {
	renderField(field) {
		return(
			<div className='form-group'>
				<label>{field.label}</label>
				<field.type className='form-control' type='text' {...field.input} />
			</div>
		)
	}
	submitForm(values) {
		this.props.sendPost(values);
	}
	render() {
		const {handleSubmit} = this.props;
		return(
			<form id='NewPost' onSubmit={handleSubmit(this.submitForm.bind(this))}>
				<Field name='title' label='Title' type='input' component={this.renderField} />
				<Field name='content' label='Content' type='textarea' component={this.renderField} />
				<Field name='labels' label='Labels' type='input' component={this.renderField} />
				<button className='btn btn-primary' type='submit'>Submit post</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'NewPostForm'
})(connect(null, {sendPost})(NewPost));