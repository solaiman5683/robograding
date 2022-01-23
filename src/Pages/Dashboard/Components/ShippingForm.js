import React from 'react';

const ShippingForm = ({ setFormData }) => {
	return (
		<form className='shipping-form'>
			<div className='name'>
				<div>
					<label>First Name*</label>
					<br />
					<input
						required
						type='text'
						name='firstName'
						onChange={e =>
							setFormData(form => ({ ...form, firstName: e.target.value }))
						}
						placeholder='First Name'
					/>
				</div>
				<div>
					<label>Last Name*</label>
					<br />
					<input
						required
						type='text'
						name='lastName'
						onChange={e =>
							setFormData(form => ({ ...form, lastName: e.target.value }))
						}
						placeholder='Last Name'
					/>
				</div>
			</div>
			<div className='address'>
				<div>
					<label>Adress*</label>
					<br />
					<input
						required
						type='text'
						name='address'
						onChange={e =>
							setFormData(form => ({ ...form, address: e.target.value }))
						}
						placeholder='Adress'
					/>
				</div>
				<div>
					<label>Apt # (optional)</label>
					<br />
					<input
						type='text'
						name='apt'
						onChange={e =>
							setFormData(form => ({ ...form, apt: e.target.value }))
						}
						placeholder='Apt'
					/>
				</div>
			</div>
			<div className='home'>
				<div>
					<label>City</label>
					<br />
					<input
						type='text'
						name='address'
						onChange={e =>
							setFormData(form => ({ ...form, city: e.target.value }))
						}
						placeholder='Adress'
					/>
				</div>
				<div>
					<label>State</label>
					<br />
					<select
						name=''
						id=''
						onChange={e =>
							setFormData(form => ({ ...form, state: e.target.value }))
						}>
						<option value='' className='form-control'>Select a State</option>
						<option value='' className='form-control'>AL</option>
						<option value='' className='form-control'>AK</option>
						<option value='' className='form-control'>AS</option>
						<option value='' className='form-control'>CA</option>
						<option value='' className='form-control'>CO</option>
						<option value='' className='form-control'>CT</option>
					</select>
				</div>
				<div>
					<label>Zip</label>
					<br />
					<input
						type='text'
						onChange={e =>
							setFormData(form => ({ ...form, zip: e.target.value }))
						}
						name='apt'
						placeholder='Zip'
					/>
				</div>
			</div>
			<div className='phone'>
				<label>Phone*</label>
				<br />
				<input
					type='text'
					name='apt'
					required
					onChange={e =>
						setFormData(form => ({ ...form, phone: e.target.value }))
					}
					placeholder='Phone Number'
				/>
			</div>
		</form>
	);
};

export default ShippingForm;
