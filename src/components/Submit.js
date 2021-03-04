import React, { Component } from "react";
import PropTypes from "prop-types";

class Submit extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmitWish}>
				<div className="mb-3">
					<h1>Wishlist App</h1>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Enter Your Wish Here"
						name="inputWish"
						onChange={this.props.handleOnChange}
						value={this.props.inputWish}
					/>
				</div>
				<button className="btn btn-primary mb-3" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

Submit.propTypes = {
	handleSubmitWish: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	inputWish: PropTypes.string.isRequired,
};

export default Submit;
