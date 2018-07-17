import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
	render() {
		// calculate the price, shipping cost, and quantity

		const cart = this.props.cart;
		let price = 0;
		let shipping = 0;
		let quantity = 0;
			// we are looping through all the items in the cart, if
			// the item has a property quantity we take that. If it 
			// is undefined we set count as 1, then price of the item
			// is item.price multiplied by count of items.
			// We are adding shipping cost, and assuming one shipping
			// cost for one or more items. We are also adding a counter

		cart.forEach(item => {
			const count = item.quantity || 1;
			price += item.price * count;
			shipping += item.shipping;
			quantity += count;
		})

		//now we calculate the total before tax which is the sum of the price
		// and the shipping.
		// Then we calculate tax as 10%
		const totalBeforeTax = price + shipping;
		const estimatedTax = 0.1 * totalBeforeTax;
		const total = totalBeforeTax + estimatedTax;
		return (
			<div className="cart">
				<h5>Order Summary</h5>
				<p><small>Items ordered: {this.props.cart.length}</small></p>
				<button>Order Review</button>
				<table>
					<tbody>
						<tr>
							<td>Items: </td>
							<td>${price.toFixed(2)}</td>
						</tr>
						<tr>
							<td>Shipping &amp; handling: </td>
							<td>${shipping.toFixed(2)} </td>
						</tr>
						<tr>
							<td>Total before tax: </td>
							<td>${totalBeforeTax.toFixed(2)} </td>
						</tr>
						<tr>
							<td>Estimated Tax: </td>
							<td>${estimatedTax.toFixed(2)} </td>
						</tr>
						<tr>
							<td>Order Total: </td>
							<td>${total.toFixed(2)} </td>
						</tr>
					</tbody>
				</table>
				<br />
				<br />
				{this.props.children}
			</div>
		);
	}
}

export default Cart;