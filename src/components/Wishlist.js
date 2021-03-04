import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";

import "./Wishlist.css";

export class Wishlist extends Component {
	state = {
		toggleInput: "",
	};

	handleToggleOnChange = (event) => {
		this.setState({
			toggleInput: event.target.value,
		});
	};

	handleToggleButton = (id, itemWish) => {
		this.setState({
			toggleInput: itemWish,
		});
		this.props.handleEditToggle(id);
		this.props.handleEditUpdateWish(id, this.state.toggleInput);
	};

	render() {
		return (
			<ul>
				{this.props.wishList.map((item) => {
					let strikeThroughClass = `${
						item.isDone ? "strike-through-isDone" : ""
					}`;

					return (
						<React.Fragment key={item.id}>
							{item.isEditToggle ? (
								<input
									value={this.state.toggleInput}
									style={{ marginRight: 10 }}
									onChange={this.handleToggleOnChange}
									name="toggleInput"
								/>
							) : (
								<li className={strikeThroughClass}>
									{item.wish}
								</li>
							)}

							<Button
								propsButtonToggle={item.isButtonToggle}
								propsClassName={"btn btn-success button-style"}
								propsName={
									item.isEditToggle ? "Submit" : "Edit"
								}
								propsOnClick={() =>
									this.handleToggleButton(item.id, item.wish)
								}
							/>
							<Button
								propsButtonToggle={item.isButtonToggle}
								propsClassName={"btn btn-warning button-style"}
								propsOnClick={() =>
									this.props.handleIsDone(item.id)
								}
								propsName={"Done"}
							/>
							<Button
								propsButtonToggle={item.isButtonToggle}
								propsClassName={"btn btn-danger button-style"}
								propsOnClick={() =>
									this.props.handleDeleteByID(item.id)
								}
								propsName={"Delete"}
							/>
							<br />
						</React.Fragment>
					);
				})}
			</ul>
		);
	}
}

Wishlist.propTypes = {
	wishList: PropTypes.array.isRequired,
	handleDeleteByID: PropTypes.func.isRequired,
	handleIsDone: PropTypes.func.isRequired,
};

export default Wishlist;
