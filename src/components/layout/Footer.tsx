import React from 'react';
import '../../styles/main.css';

const Footer: React.FC = () => {
	return (
		<div className=' mt-auto'>
			<div className='flex-1 text-center text-gray-700'>
				<h4>Made by wenked, 2020 </h4>
				<h6>Discord wenked#4404</h6>
				<h6>
					Powered by{' '}
					<a
						className='font-bold'
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.albion-online-data.com/'>
						Albion Data Project
					</a>
				</h6>
			</div>
		</div>
	);
};

export default Footer;
