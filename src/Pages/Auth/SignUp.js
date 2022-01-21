import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './Style.css';

const SignUp = () => {
	const {register} = useAuth()
	const handleSubmit = (e) => {
		e.preventDefault();
		register(e.target.name.value,e.target.email.value, e.target.password.value)
	}
	return (
		<div style={{ width: '50%', textAlign: 'center' }}>
			<Typography variant='h5' className="mb-5">Sign Up to AGS to Access Robograding</Typography>
            <form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="Full Name" className='form-control rounded-pill mb-3 p-3'  />
				<input type="text" name="username" placeholder="Create Username" className='form-control rounded-pill mb-3 p-3'  />
				<input type="email" name="email" placeholder="Email" className='form-control rounded-pill mb-3 p-3'  />
				<input type="password" name="password" placeholder="Password" className='form-control rounded-pill mb-3 p-3'  />
				<input type="password" name="confirm-password" placeholder="Confirm Password" className='form-control rounded-pill mb-3 p-3'  />
				<button className='form-control rounded-pill mb-3 p-3 bg-secondary text-light'>Login</button>
			</form>
			<Link to='/auth/sign-in'>Have an account?</Link>
		</div>
	);
};

export default SignUp;
