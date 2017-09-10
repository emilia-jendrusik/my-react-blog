import React, {Component} from 'react';

class Author extends Component {
	render () {
		return (
      <div className='col-md-4'>
			   <div className='author-section'>
              <div className='author-inner'>
                <div className='user'>
                  <div className='user1'>
                  <img src='images/user.png' className='img-responsive' alt='' />
                  </div>
                  <div className='user2'>
                    <h4>russell crowe</h4>
                  <ul>
                    <li><span className='glyphicon glyphicon-map-marker' aria-hidden='true'></span> wellington, New Zealand</li>
                    <li><span className='glyphicon glyphicon-envelope' aria-hidden='true'></span><a href='mailto:example@mail.com'>example@mail.com</a> </li>
                    <li><span className='glyphicon glyphicon-heart-empty' aria-hidden='true'></span>russell crowe </li>
                  </ul>
                  </div>
                  <div className='clearfix'></div>
                </div>
                  <div className='flowers'>
                    <div className='col-md-4 flower-grid'>
                      <h5>10,113</h5>
                      <p>followers</p>
                    </div>
                    <div className='col-md-4 flower-grid'>
                      <h5>947</h5>
                      <p>following</p>
                    </div>
                    <div className='col-md-4 flower-grid'>
                      <h5>630</h5>
                      <p>listed</p>
                    </div>
                    <div className='clearfix'></div>
                  </div>
                  <div className='search'>
                    <div className='social-icon'>
                    <a href='#'><i className='icon'></i></a>
                    <a href='#'><i className='icon1'></i></a>
                    <a href='#'><i className='icon2'></i></a>
                      </div>
                      <div className='search1'>
                      <form>
                        <input type='serach' placeholder='search' />
                        <input type='submit' value='' />
                      </form>
                    </div>
                    <div className='clearfix'></div>
                  </div>

                  <div className='contact'>
                    <h4>contact form</h4>
                    <form>
                      <input type='text' placeholder='example@mail.com' />
                      <input type='text' className='sub' placeholder='subject' />
                      <textarea placeholder='message'></textarea>
                    </form>
                    <div className='enviar'>
                    <form>
                      <div className='contact-check'>
                        <p><input type='checkbox' checked='' />save a copy</p>
                      </div>
                      <div className='contact-enviar'>
                        <input type='submit' value='Send' />
                      </div>
                    </form>
                    <div className='clearfix'> </div>
                    </div>
                  </div>
                  <div className='news-grids'>
                <div className='col-md-12 new-grid'>
                  <div className='news'>
                    <div className='new1'>
                      <h4>news</h4>
                    </div>
                    <div className='new2'>
                      <a href='#'>view all</a>
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

export default Author;