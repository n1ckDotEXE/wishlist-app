import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Wishlist from "./Wishlist";
import Submit from "./Submit";

import "./Parent.css";

class Parent extends Component {
	state = {
		wishList: [
			{
				id: uuidv4(),
				wish: "Example 1",
				isDone: false,
				isEditToggle: false,
				isButtonToggle: false,
			},
			{
				id: uuidv4(),
				wish: "Example 2",
				isDone: false,
				isEditToggle: false,
				isButtonToggle: false,
			},
			{
				id: uuidv4(),
				wish: "Example 3",
				isDone: false,
				isEditToggle: false,
				isButtonToggle: false,
			},
		],
		inputWish: "",
	};

	handleSubmitWish = (event) => {
		event.preventDefault();

		let newWishArray = [
			...this.state.wishList,
			{
				id: uuidv4(),
				wish: this.state.inputWish,
				isDone: false,
				isEditToggle: false,
			},
		];

		this.setState({
			wishList: newWishArray,
			inputWish: "",
		});
	};

	handleOnChange = (event) => {
		this.setState({
			inputWish: event.target.value,
		});
	};

	handleDeleteByID = (id) => {
		let filteredWishListArray = this.state.wishList.filter((item) => {
			if (item.id !== id) {
				item.isButtonToggle = false;
				return item;
			}
		});

		this.setState({
			wishList: filteredWishListArray,
		});
	};

	handleIsDone = (id) => {
		// Find ID of Wish
		let updatedWishListArray = this.state.wishList.map((item) => {
			if (item.id === id) {
				// Change wish
				item.isDone = !item.isDone;
			}
			return item;
		});
		// Set new State
		this.setState({
			wishList: updatedWishListArray,
		});
	};

	handleEditToggle = (id) => {
		let toggledWishList = this.state.wishList.map((item) => {
			if (item.id === id) {
				item.isEditToggle = !item.isEditToggle;
			}

			if (item.id !== id) {
				item.isButtonToggle = !item.isButtonToggle;
			}

			return item;
		});

		this.setState({
			wishList: toggledWishList,
		});
	};

	handleEditUpdateWish = (id, newWishItem) => {
		let updatedWishItem = this.state.wishList.map((item) => {
			if (item.id === id) {
				item.wish = newWishItem;
			}
			return item;
		});

		this.setState({
			wishList: updatedWishItem,
		});
	};

	render() {
		return (
			<div className="parent-container">
				<Submit
					handleSubmitWish={this.handleSubmitWish}
					handleOnChange={this.handleOnChange}
					inputWish={this.state.inputWish}
				/>
				<Wishlist
					wishList={this.state.wishList}
					handleDeleteByID={this.handleDeleteByID}
					handleIsDone={this.handleIsDone}
					handleEditToggle={this.handleEditToggle}
					handleEditUpdateWish={this.handleEditUpdateWish}
				/>
			</div>
		);
	}
}

export default Parent;
