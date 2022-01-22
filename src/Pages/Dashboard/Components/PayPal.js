import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect } from 'react';

const PayPal = ({ currency, showSpinner, amount }) => {
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
		dispatch({
			type: 'resetOptions',
			value: {
				...options,
				currency: currency,
			},
		});
	}, [currency, showSpinner]);
	return (
		<>
			{showSpinner && isPending && <div className='spinner' />}
			<PayPalButtons
				style={{ layout: 'vertical' }}
				disabled={false}
				forceReRender={[amount, currency, { layout: 'vertical' }]}
				fundingSource={undefined}
				createOrder={(data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									description: 'Cool looking table',
									amount: {
										currency_code: currency,
										value: amount,
									},
								},
							],
						})
						.then(orderId => {
							// Your code here after create the order
							return orderId;
						});
				}}
				onApprove={(data, actions) => {
					return actions.order.capture().then(() => {
						// Your code here after capture the order
						console.log(data);
					});
				}}
				onError={err => {
					console.log(err);
				}}
				onCancel={() => {
					console.log('cancelled');
				}}
			/>
		</>
	);
};

export default PayPal;
