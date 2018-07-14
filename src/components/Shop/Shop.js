import React, { Component } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	}

	componentDidMount() {
		const first10 = fakeData.slice(0, 10);
		this.setState({products: first10});
	}

	handleAdd = () => {
		console.log('item added!');
	}

	render() {
		return (
			<div className="shop">
				<div className="product-container">
					<h2>Shop Now</h2>
					{
						this.state.products.map(prod => <Product key={prod.id} prodInfo={prod} handleAdd={this.handleAdd}></Product>)
					}
				</div>
				<div className="cart-container">
					<h5>Order Summary</h5>
				</div>
			</div>
		);
	}
}

export default Shop;
