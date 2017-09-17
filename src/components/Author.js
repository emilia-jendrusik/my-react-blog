import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchAuthor} from '../actions';

class Author extends Component {
  componentDidMount() {
    this.props.fetchAuthor();
  }
	render () {
    const propsEl = this.props.author;
    if(_.isEmpty(propsEl)) {
      return <div>Loading</div>
    }
		return (
      <div className='col-md-4'>
			   <div className='author-section'>
              <div className='author-inner'>
                <div className='user'>

                  <div className='user2'>
                    <h4>{propsEl.name}</h4>
                    <p>{propsEl.description}</p>
                  <ul>
                    <li><span className='glyphicon glyphicon-globe' aria-hidden='true'></span><a href={propsEl.url}>{propsEl.url}</a></li>
                  </ul>
                  </div>
                  <div className='clearfix'></div>
                </div>
                  <div className='flowers'>
                    <div className='col-md-6 flower-grid'>
                      <h5>{propsEl.pages.totalItems}</h5>
                      <p>Pages</p>
                    </div>
                    <div className='col-md-6 flower-grid'>
                      <h5>{propsEl.posts.totalItems}</h5>
                      <p>Posts</p>
                    </div>
                    <div className='clearfix'></div>
                  </div>
                  <div className='search'>
                    <div className='social-icon'>
                    <a href='#'><i className='icon'></i></a>
                    <a href='#'><i className='icon1'></i></a>
                    <a href='#'><i className='icon2'></i></a>
                      </div>
                    <div className='clearfix'></div>
                  </div>
                  <div className='news-grids'>
                <div className='col-md-12 new-grid'>
                  <div className='news'>
                    <div className='new1'>
                      <h4>Newest Posts</h4>
                    </div>
                    <div className='clearfix'></div>
                  </div>
                  <div className='new-bottom'>
                    <div className='new-bottom1'>
                      <img src={process.env.PUBLIC_URL + 'images/n3.png'} className='img-responsive' alt='' />
                    </div>
                    <div className='new-bottom2'>
                      <h5>21 inspiring plan website designs.</h5>
                      <p>posted on <span>fed 21 2013</span></p>
                    </div>
                    <div className='clearfix'></div>
                  </div>
                  <div className='new-bottom new3'>
                    <div className='new-bottom1'>
                      <img src={process.env.PUBLIC_URL + 'images/n2.png'} className='img-responsive' alt='' />
                    </div>
                    <div className='new-bottom2'>
                      <h5>the benefits of working on freelance projects.</h5>
                      <p>posted on <span>fed 21 2013</span></p>
                    </div>
                    <div className='clearfix'></div>
                  </div>
                  <div className='new-bottom'>
                    <div className='new-bottom1'>
                      <img src={process.env.PUBLIC_URL + 'images/n3.png'} className='img-responsive' alt='' />
                    </div>
                    <div className='new-bottom2'>
                      <h5>the flexible web.</h5>
                      <p>posted on <span>fed 21 2013</span></p>
                    </div>
                    <div className='clearfix'></div>
                  </div>
                </div>
              
                </div>
                 
                </div>
      
                <div className='clearfix'></div>
       
               
              </div>
      </div>
		)
	}
}
function mapStateToProps(state) {
  return {author: state.author}
}

export default connect(mapStateToProps, {fetchAuthor})(Author);