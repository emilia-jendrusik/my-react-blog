import React, {Component} from 'react';

class Post extends Component {
	render () {
		return (
      <div className='col-md-4'>
			   <div className='beautiful'>
          <img src={this.props.postData.labels[0]} className='img-responsive' alt='' />
                <h3>{this.props.postData.title}</h3>
                  <a href='#' className='button'>read more</a>
             </div>
          <div className='clearfix'></div>
      </div>
		)
	}
}

export default Post;