import React, { Component } from 'react';
import './Product.css';
import StarRatingComponent from 'react-star-rating-component';

class Product extends Component {
	render() {
		const prodInfo = this.props.prodInfo;
		return (
			<div className="product">
				<div>
					<img src={prodInfo.img} alt=""/>
				</div>
				<div>
					<h4 className="product-name">{prodInfo.name}</h4>
					<div className="product-info">
						<div>
							<p>by: {prodInfo.seller}</p>
							<p>${prodInfo.price}</p>
							<button onClick={() => this.props.handleAdd(prodInfo)}>Add to Cart</button>
						</div>
						<div>
							<h5>Features</h5>
							<StarRatingComponent
								name="product-rating"
								emptyStarColor="lightgrey"
								value={prodInfo.rating}
							></StarRatingComponent>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;