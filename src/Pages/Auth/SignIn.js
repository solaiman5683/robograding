import { Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const SignIn = () => {
	const { login, user } = useAuth();
	const navigate = useNavigate();
	if (user?.email) {
		navigate('/dashboard');
	}
	const handleSubmit = e => {
		e.preventDefault();
		login(e.target.email.value, e.target.password.value);
	};
	return (
		<div style={{ width: '60%' }}>
			<Typography variant='h4' className='mb-4'>
				Log In to Your AGS Account to Access Robograding
			</Typography>
			<form className='' onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='Email'
					className='form-control rounded-pill mb-3 p-3'
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='form-control rounded-pill mb-3 p-3'
				/>
				<button
					type='submit'
					className='form-control rounded-pill mb-3 p-3 login-btn '>
					Login
				</button>
			</form>
			<Link to='/auth/sign-up'>Don't Have an account?</Link>
		</div>
	);
};

export default SignIn;
