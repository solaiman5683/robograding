import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StyleIcon from '@mui/icons-material/Style';
import {
	AppBar,
	Button,
	Container,
	Grid,
	Radio,
	Toolbar,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AddedCard from '../Components/AddedCard';
import CardResult from '../Components/CardResult';
import PayPal from '../Components/PayPal';
import ShippingForm from '../Components/ShippingForm';
import Summary from '../Components/Summery';
import './NewSubmission.css';

const NewSubmission = () => {
	const [step, setStep] = React.useState(1);
	const [service, setService] = React.useState('20');
	const [open, setOpen] = React.useState(false);
	const [cardName, setCardName] = React.useState('');
	const [cardDes, setCardDes] = React.useState('');
	const [cardImage, setCardImage] = React.useState('');
	const [cards, setCards] = React.useState([]);
	const [cardImgData, setCardImgData] = React.useState('');
	const [payment, setPayment] = React.useState('card');
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		address: '',
		state: '',
		apt: '',
		city: '',
		zip: '',
		phone: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		const card = {
			id: cards.length + 1,
			name: cardName,
			description: cardDes,
			image: cardImage,
			quantity: '1',
			price: '1',
		};
		const formData = new FormData();
		formData.append('name', cardName);
		formData.append('description', cardDes);
		formData.append('image', cardImgData);
		formData.append('quantity', card.quantity);
		formData.append('price', card.price);
		axios
			.post('https://still-temple-91920.herokuapp.com/cards/add', formData)
			.then(res => console.log(res.data));

		setCards([...cards, card]);
		setOpen(false);
		setCardImage('');
		e.target.reset();
	};
	const handleImage = e => {
		const reader = new FileReader();
		const file = e.target.files[0];
		setCardImgData(file);
		reader.onloadend = () => {
			if (reader.readyState === 2) {
				setCardImage(reader.result);
			}
		};
		reader.readAsDataURL(file);
	};
	return (
		<div>
			<AppBar
				position='static'
				sx={{
					background:
						'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
					py: '1rem',
				}}>
				<Container maxWidth='lg' style={{ maxWidth: '1280', padding: '0' }}>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: 'flex' }}>
							<Link to='/dashboard'>
								<img src='/images/robo.svg' height='66px' alt='' />
							</Link>
						</Typography>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, ml: 'auto', display: 'flex' }}>
							<img src='/images/avatar.svg' alt='' />
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<h2
				className='submission-title'
				style={{
					background:
						'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
					color: '#fff',
					textAlign: 'center',
					borderBottom: '3px solid #20BFB8',
				}}>
				Submit Cards For Grading
			</h2>

			<div className='timeline'>
				<div className={`timeline-item ${step === 1 && 'active'}`}>
					<div className='timeline-icon'>
						<BarChartIcon />
					</div>
					<span>Service</span>
				</div>
				<div className={`timeline-item ${step === 2 && 'active'}`}>
					<div className='timeline-icon'>
						<StyleIcon />
					</div>
					<span>Cards</span>
				</div>
				<div className={`timeline-item ${step === 3 && 'active'}`}>
					<div className='timeline-icon'>
						<LocalShippingOutlinedIcon />
					</div>
					<span>Shipping</span>
				</div>
				<div className={`timeline-item ${step === 4 && 'active'}`}>
					<div className='timeline-icon'>
						<CreditCardOutlinedIcon />
					</div>
					<span>Payment</span>
				</div>
				<div className={`timeline-item ${step === 5 && 'active'}`}>
					<div className='timeline-icon'>
						<ReceiptOutlinedIcon />
					</div>
					<span>Review</span>
				</div>
			</div>
			<div className='content'>
				<Container maxWidth='lg'>
					<div className='step-content'>
						<Box sx={{ width: { sm: '100%', md: '80%' }, mx: 'auto' }}>
							<div className={`service ${step === 1 ? 'active' : ''}`}>
								<div className='service-text'>
									<h3>Select your service level</h3>
									<p style={{ margin: '10px 0' }}>
										Select your desired service level from the list below
									</p>

									<form style={{ margin: '20px 0' }}>
										<Button
											className={`service-item ${service === '20' && 'active'}`}
											onClick={() => setService('20')}>
											<span className='left'>
												<Radio
													checked={service === '20' ? true : false}
													value='20'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 20 / Card</h5>
											</span>
											<span className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</span>
										</Button>
										<Button
											className={`service-item ${service === '50' && 'active'}`}
											onClick={() => setService('50')}>
											<div className='left'>
												<Radio
													checked={service === '50' ? true : false}
													value='50'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 50 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
										<Button
											className={`service-item ${
												service === '100' && 'active'
											}`}
											onClick={() => setService('100')}>
											<div className='left'>
												<Radio
													checked={service === '100' ? true : false}
													value='100'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 100 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
										<Button
											className={`service-item ${
												service === '250' && 'active'
											}`}
											onClick={() => setService('250')}>
											<div className='left'>
												<Radio
													checked={service === '250' ? true : false}
													value='a'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 250 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
										<Button
											className={`service-item ${
												service === '1000' && 'active'
											}`}
											onClick={() => setService('1000')}>
											<div className='left'>
												<Radio
													checked={service === '1000' ? true : false}
													value='a'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 1000 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
									</form>
								</div>
							</div>
						</Box>
						<div className={`cards ${step === 2 ? 'active' : ''}`}>
							<div>
								<h3>Add cards to your submission</h3>
								<p style={{ margin: '10px 0' }}>
									Search for a card below and click the "+" icon, then enter the
									quantity and value for each card.
								</p>
							</div>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={8}>
									<hr />
									<p>Search</p>
									<div className='card-search-box'>
										<SearchIcon />
										<input type='text' placeholder='Search' />
									</div>
									<CardResult
										cardName={cardName}
										cardDes={cardDes}
										cardImage={cardImage}
										setCardImage={setCardImage}
										setCardName={setCardName}
										open={open}
										setOpen={setOpen}
										setCardDes={setCardDes}
										handleSubmit={handleSubmit}
										handleImage={handleImage}
									/>
									<AddedCard setCards={setCards} cards={cards} />
								</Grid>
								<Grid item xs={12} md={4} sm={12}>
									<Summary setStep={setStep} service={service} cards={cards} />
								</Grid>
							</Grid>
						</div>
						<div className={`shipping ${step === 3 ? 'active' : ''}`}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} md={8}>
									<div className='shipping-intro'>
										<h2>Enter shipping details</h2>
										<p>
											Select your preferred return shipping method and enter
											your return shipping address
										</p>
									</div>
									<hr />
									<h4>Shipping Address</h4>
									<small className='text-muted'>
										Required filds are marked with (*)
									</small>
									<ShippingForm setFormData={setFormData} />
								</Grid>
								<Grid item xs={12} sm={12} md={4}>
									<Summary
										setStep={setStep}
										service={service}
										cards={cards}
										shipping={true}
									/>
								</Grid>
							</Grid>
						</div>
						<div className={`payment ${step === 4 ? 'active' : ''}`}>
							<Grid className='card-icon-1' container spacing={4}>
								<Grid item xs={12} md={8}>
									<h2>Enter Payment Details</h2>
									<p>Select your payment method and enter details.</p>
									<hr />
									<h5>Select Payment Method</h5>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<Button
												onClick={() => setPayment('card')}
												className={`service-item ${
													payment === 'card' && 'active'
												}`}>
												<div className='left' style={{ width: '100%' }}>
													<Radio
														checked={payment === 'card'}
														value='250'
														name='radio-buttons'
														inputProps={{ 'aria-label': 'A' }}
													/>
													<h5>
														<svg
															width='26'
															height='18'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M23.874.95H2.126C1.142.95.344 1.748.344 2.732v12.535c0 .984.798 1.782 1.782 1.782h21.748c.984 0 1.782-.798 1.782-1.782V2.732c0-.984-.798-1.782-1.782-1.782Z'
																fill='#FDBD40'></path>
															<path
																d='M.344 4.112h25.312v3.45H.344v-3.45Z'
																fill='#2D75BB'></path>
															<path
																d='M21.642 11.276h-4.39a.957.957 0 0 0-.957.957v1.106c0 .529.428.957.957.957h4.39a.957.957 0 0 0 .957-.957v-1.106a.957.957 0 0 0-.957-.957Z'
																fill='#FFF69A'></path>
														</svg>
														Credit or Debit Card
													</h5>
												</div>
												<div className='right'></div>
											</Button>
										</Grid>
										<Grid item xs={12} md={6}>
											<Button
												onClick={() => setPayment('paypal')}
												className={`service-item  ${
													payment === 'paypal' && 'active'
												}`}>
												<div className='left'>
													<Radio
														checked={payment === 'paypal'}
														value='100'
														name='radio-buttons'
														inputProps={{ 'aria-label': 'A' }}
													/>
													<h5>
														<svg
															width='79'
															height='20'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M60.497 5.218h-4.224c-.248 0-.497.248-.62.497l-1.74 10.931c0 .249.124.373.373.373h2.236c.248 0 .372-.124.372-.373l.497-3.105c0-.249.249-.497.621-.497h1.367c2.857 0 4.472-1.367 4.845-4.1.248-1.118 0-2.111-.497-2.732-.746-.622-1.864-.994-3.23-.994Zm.497 4.1c-.249 1.49-1.367 1.49-2.485 1.49h-.745l.497-2.857c0-.125.124-.249.372-.249h.249c.745 0 1.49 0 1.863.497.249.124.249.497.249 1.118Z'
																fill='#139AD6'></path>
															<path
																d='M30.063 5.218H25.84c-.249 0-.497.248-.621.497l-1.74 10.931c0 .249.125.373.373.373h1.988c.248 0 .497-.248.62-.497l.498-2.981c0-.249.248-.497.62-.497h1.367c2.857 0 4.472-1.367 4.845-4.1.248-1.118 0-2.111-.497-2.732-.745-.622-1.74-.994-3.23-.994Zm.497 4.1c-.248 1.49-1.366 1.49-2.484 1.49h-.621l.497-2.857c0-.125.124-.249.372-.249h.249c.745 0 1.49 0 1.863.497.124.124.248.497.124 1.118ZM42.856 9.193h-1.988c-.124 0-.372.124-.372.248l-.125.621-.124-.248c-.497-.621-1.366-.87-2.36-.87-2.236 0-4.224 1.74-4.596 4.1-.249 1.242.124 2.36.745 3.105.621.746 1.49.994 2.609.994 1.863 0 2.857-1.118 2.857-1.118l-.124.621c0 .249.124.373.372.373h1.864c.248 0 .497-.249.62-.497l1.119-6.957c-.125-.124-.373-.372-.497-.372Zm-2.857 3.975c-.249 1.118-1.118 1.988-2.36 1.988-.622 0-1.119-.249-1.367-.497-.248-.373-.373-.87-.373-1.491.125-1.118 1.118-1.988 2.236-1.988.622 0 .994.249 1.367.497.372.373.497.994.497 1.49Z'
																fill='#263B80'></path>
															<path
																d='M73.167 9.193h-1.988c-.124 0-.372.124-.372.248l-.125.621-.124-.248c-.497-.621-1.366-.87-2.36-.87-2.236 0-4.224 1.74-4.596 4.1-.249 1.242.124 2.36.745 3.105.621.746 1.49.994 2.609.994 1.863 0 2.857-1.118 2.857-1.118l-.124.621c0 .249.124.373.372.373h1.864c.248 0 .496-.249.62-.497l1.119-6.957c-.124-.124-.249-.372-.497-.372Zm-2.857 3.975c-.249 1.118-1.118 1.988-2.36 1.988-.622 0-1.118-.249-1.367-.497-.248-.373-.373-.87-.373-1.491.125-1.118 1.118-1.988 2.236-1.988.621 0 .994.249 1.367.497.497.373.621.994.497 1.49Z'
																fill='#139AD6'></path>
															<path
																d='M53.665 9.192h-2.112c-.248 0-.372.125-.496.249l-2.733 4.223L47.08 9.69c-.124-.248-.248-.372-.62-.372h-1.988c-.249 0-.373.248-.373.496l2.236 6.584-2.112 2.982c-.124.248 0 .62.249.62h1.987c.249 0 .373-.123.497-.248l6.832-9.813c.373-.373.125-.746-.124-.746Z'
																fill='#263B80'></path>
															<path
																d='m75.527 5.59-1.739 11.18c0 .249.124.373.373.373H75.9c.248 0 .497-.249.621-.497l1.74-10.932c0-.248-.125-.372-.374-.372H75.9c-.124-.125-.249 0-.373.248Z'
																fill='#139AD6'></path>
															<path
																d='M14.286 1.49C13.416.498 11.8 0 9.566 0H3.353c-.373 0-.745.373-.87.745L0 17.018c0 .373.248.622.497.622h3.85l.995-6.087v.248c.124-.373.496-.745.87-.745h1.862c3.603 0 6.336-1.49 7.205-5.59v-.373c-.124 0-.124 0 0 0 .125-1.615-.124-2.609-.993-3.602Z'
																fill='#263B80'></path>
															<path
																d='M15.156 5.094v.372c-.87 4.224-3.603 5.59-7.205 5.59H6.087c-.372 0-.745.373-.87.746l-1.241 7.577c0 .249.124.497.496.497h3.23c.373 0 .746-.248.746-.62v-.125l.62-3.851v-.248c0-.373.373-.622.746-.622h.497c3.105 0 5.59-1.242 6.211-4.968.248-1.491.124-2.858-.621-3.727a1.272 1.272 0 0 0-.745-.621Z'
																fill='#139AD6'></path>
															<path
																d='M14.287 4.72c-.124 0-.249-.124-.373-.124s-.248 0-.373-.124c-.496-.124-.993-.124-1.614-.124H7.082c-.124 0-.249 0-.373.124a.683.683 0 0 0-.372.621l-.994 6.46v.248c.124-.373.497-.745.87-.745h1.863c3.602 0 6.335-1.491 7.205-5.59 0-.125 0-.249.124-.373-.249-.124-.373-.248-.621-.248-.373-.125-.373-.125-.497-.125Z'
																fill='#232C65'></path>
														</svg>
													</h5>
												</div>
												<div className='right'></div>
											</Button>
										</Grid>
									</Grid>
									<hr />
									<h5>Add debit / credit card</h5>
									<div className='Add-debit'>
										<br />
										<i className='far fa-credit-card'></i>
										<input type='text' name='apt' placeholder='Card Number' />
									</div>
									<Button
										sx={{
											width: { sm: '100%', md: '100%' },
											mx: 'auto',
											backgroundColor: '#20BFB8',
										}}
										variant='contained'
										className='card-btn'>
										Add debit / credit card
									</Button>

									{payment === 'card' ? (
										<div className='mt-4 pt-5'>
											<h6>Billing Adress</h6>
											<p className='text-muted m-0'>
												{formData?.firstName} {formData?.lastName}
											</p>
											<p className='text-muted m-0'>{formData?.address}</p>
											<p className='text-muted'>
												{formData?.city} {formData.state} {formData?.zip}
											</p>
										</div>
									) : (
										<div className='mt-4 pt-5'>
											<h6>Paypal</h6>
											<p className='m-1 text-secondary'>
												You will be redirected to the PayPal site after
												reviewing your order.
											</p>
										</div>
									)}
								</Grid>
								<Grid item xs={12} md={4}>
									<Summary
										setStep={setStep}
										service={service}
										cards={cards}
										shipping={true}
									/>
								</Grid>
							</Grid>
						</div>
						<div className={`review ${step === 5 ? 'active' : ''}`}>
							<Grid container spacing={4}>
								<Grid item xs={12} md={8}>
									<div>
										<h3>Review your submission</h3>
										<p>
											Go through all the information you input in the previous
											steps, and click submit to finish submission.
										</p>
										<hr />
										<AddedCard
											title='Card(s) in Submission'
											cards={cards}
											setCards={setCards}
										/>
										<div className='added-card'>
											<div className='row'>
												<div className='col-md-4'>
													<h6 className='fs-6'>
														Service Level <span className='edit-btn'>Edit</span>
													</h6>
													<p className='text-muted text-sm'>
														${service} / Card
														<br />
														Protection up to $500 <br /> 28-30 Day turnaround
													</p>
												</div>
												<div className='col-md-4'>
													<h6 className='fs-6'>
														Payment Method{' '}
														<span className='edit-btn'>Edit</span>
													</h6>
													<p className='text-muted text-sm'>PayPal</p>
												</div>
												<div className='col-md-4'>
													<h6 className='fs-6'>
														Billing Address{' '}
														<span className='edit-btn'>Edit</span>
													</h6>
													<p className='text-muted m-0 text-sm'>
														{formData?.firstName} {formData?.lastName}
													</p>
													<p className='text-muted m-0 text-sm'>
														{formData?.address}
													</p>
													<p className='text-muted text-sm'>
														{formData?.city} {formData.state} {formData?.zip}
													</p>
												</div>
												<div className='col-md-4'>
													<h6 className='fs-6'>
														Shipping Address{' '}
														<span className='edit-btn'>Edit</span>
													</h6>
													<p className='text-muted m-0 text-sm'>
														{formData?.firstName} {formData?.lastName}
													</p>
													<p className='text-muted m-0 text-sm'>
														{formData?.address}
													</p>
													<p className='text-muted text-sm'>
														{formData?.city} {formData.state} {formData?.zip}
													</p>
												</div>
												<div className='col-md-4'>
													<h6 className='fs-6'>
														Return Shipping Method{' '}
														<span className='edit-btn'>Edit</span>
													</h6>
													<p className='text-muted fs-6'>Insured Shipping</p>
												</div>
											</div>
										</div>
									</div>
								</Grid>
								<Grid item xs={12} md={4}>
									<Summary
										setStep={setStep}
										service={service}
										cards={cards}
										shipping={true}
										paypal={() => (
											<PayPal currency='USD' showSpinner={false} amount={20} />
										)}
									/>
								</Grid>
							</Grid>
						</div>
					</div>
					<hr />
					<div className='footer'>
						<Button
							className={`back-btn ${step === 1 ? 'hidden' : ''}`}
							onClick={() =>
								setStep(step => (step > 1 ? (step -= 1) : (step = 1)))
							}>
							<ArrowBackOutlinedIcon />
							Back
						</Button>
						<Button
							disabled={
								step === 2
									? !cards.length
										? true
										: false
									: (
											step === 3
												? !(
														formData.firstName &&
														formData.lastName &&
														formData.address &&
														formData.phone
												  )
													? true
													: false
												: false
									  )
									? true
									: false
							}
							className={`next-btn ${
								step === 2
									? !cards.length
										? 'disabled'
										: ''
									: (
											step === 3
												? !(
														formData.firstName &&
														formData.lastName &&
														formData.address &&
														formData.phone
												  )
													? 'disabled'
													: ''
												: ''
									  )
									? 'disabled'
									: ''
							}`}
							onClick={() =>
								setStep(step => (step < 5 ? (step += 1) : (step = 5)))
							}>
							Next
						</Button>
						{/* {step === 2
							? !cards.length
								? 'disabled'
								: ''
							: (
									step === 3
										? !(
												formData.firstName &&
												formData.lastName &&
												formData.address
										  )
											? 'disabled'
											: ''
										: ''
							  )
							? 'disabled'
							: ''} */}
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NewSubmission;
