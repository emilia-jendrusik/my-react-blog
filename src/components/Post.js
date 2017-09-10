import React, {Component} from 'react';

class Post extends Component {
	render () {
		return (
      <div className='col-md-4'>
			   <div className='beautiful'>
                <img src={process.env.PUBLIC_URL + 'images/p1.jpg'} className='img-responsive' alt='' />
                <h3>{this.props.postData.title}</h3>
                  <p className='beaut-link1'>{this.props.postData.content}</p>
                  <a href='#' className='button'>read more</a>
                <div className='beaut-bottoms'>
                  <div className='col-md-3 beaut-grid'>
                    <p><span className='glyphicon glyphicon-eye-open' aria-hidden='true'></span> 9752</p>
                  </div>
                  <div className='col-md-3 beaut-grid'>
                    <p><span className='glyphicon glyphicon-heart' aria-hidden='true'></span> 125</p>
                  </div>
                  <div className='col-md-3 beaut-grid'>
                    <p><span className='glyphicon glyphicon-star' aria-hidden='true'></span> 103</p>
                  </div>
                  <div className='col-md-3 beaut-grid'>
                    <p><span className='glyphicon glyphicon-download' aria-hidden='true'></span> 95</p>
                  </div>
                  <div className='clearfix'></div>
                </div>
             </div>
          <div className='clearfix'></div>
      </div>
		)
	}
}

export default Post;