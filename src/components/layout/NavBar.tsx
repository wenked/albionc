import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const NavBar: React.FC = () => {
	return (
		<nav>
			<ul className='flex bg-green-1100'>
				<li className='list-none ml-4 p-4 text-xl hover:text-green-1000'>
					<Link className='no-underline text-gray-1100' to='/'>
						Refiner Tool
					</Link>
				</li>
				<li className='list-none ml-4 p-4 text-xl hover:text-green-1000'>
					<Link className='no-underline text-gray-1100' to='/marketinfo'>
						Market
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
