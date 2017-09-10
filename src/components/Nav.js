import React, {Component} from 'react';

class NavBar extends Component {
	render () {
		return (
			 <nav className='navbar navbar-default'>
			  <div className='container-fluid'>
			    <div className='navbar-header'>
			      <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
			        <span className='sr-only'>Toggle navigation</span>
			        <span className='icon-bar'></span>
			        <span className='icon-bar'></span>
			        <span className='icon-bar'></span>
			      </button>
			      <a className='navbar-brand' href='#'>My Blog</a>
			    </div>
			    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
			      <ul className='nav navbar-nav'>
			        <li className='active'><a href='#'>All posts</a></li>
			        <li><a href='#'>Self improvement</a></li>
			        <li><a href='#'>Fitness</a></li>
			        <li><a href='#'>Work organization</a></li>
			        <li className='dropdown'>
			          <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Posts by month<span className='caret'></span></a>
			          <ul className='dropdown-menu'>
			            <li><a href='#'>July 2017</a></li>
			            <li><a href='#'>June 2017</a></li>
			            <li><a href='#'>May 2017</a></li>
			          </ul>
			        </li>
			      </ul>
			      <form className='navbar-form navbar-left'>
			        <div className='form-group'>
			          <input type='text' className='form-control' placeholder='Search' />
			        </div>
			        <button type='submit' className='btn btn-default'>Submit</button>
			      </form>
			      </div>
			  </div>
			</nav>
		)
	}
}

export default NavBar;