import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm2 from "./Paymentform2"

const PUBLIC_KEY = "pk_test_51I3wVOKwc4mI1upsWjZU2EE6TGIFlhfst3ZD9PtWmS39CJBTsHQtMSqJKNgyVOYYgELi8vDEQ2KN63ezWPPT1FbK00g2wGi0Tg";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer2() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm2 />
		</Elements>
	)
}