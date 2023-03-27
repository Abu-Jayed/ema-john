import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
	return (
		<nav className='nav'>
		<div className='ml-12 header flex min-w-[1200px] justify-between '>
			<img src={logo} alt="" />
			<div className=''>
			<a href="/a">Order</a>
			<a href="/b">Review</a>
			<a href="/c">Inventory</a>
			<a href="/d">Login</a>
			</div>
		</div>
		</nav>
	);
};

export default Header;