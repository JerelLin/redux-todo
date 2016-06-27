"use strict";
import React, { Component, PropTypes } from "react";
import Todo from "./todo.jsx";

class Todolist extends React.Component{
	render(){
		return(
			<ul>
				{
					this.props.todos.map((todo, index) => {
						return(
							<Todo { ...todo } onClick={ () => this.props.onTodoClick(index) } key = { index }/>
						)
					})
				}
			</ul>	
		)
	}
};

Todolist.propTypes = {
	todos : PropTypes.arrayOf(
			PropTypes.shape({
				text : PropTypes.string.isRequired,
				completed : PropTypes.bool.isRequired
			}).isRequired
		).isRequired,
	onTodoClick : PropTypes.func.isRequired
};

export default Todolist; 