// domain/.netlify/functions/create-payment-intent.js
require('dotenv').config() // will be used in next line to hide Secret key in {const stripe = require('stripe')(SECRET KEY)}

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
	const { /* cart,  */shipping_fee, total_amount } = JSON.parse(event.body)
	//console.log(cart)
	const calculateOrderAmount = () => { 						// from stripe docs
		return shipping_fee + total_amount
	}

	try {
		// Create a PaymentIntent with the order amount and currency (from stripe docs)
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateOrderAmount(), // or just: shipping_fee + total_amount,
			currency: 'usd',
		})
		return {
			statusCode: 200,
			body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		}
	}
}