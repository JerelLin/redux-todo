"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { addTodo, completeTodo, setVisibilityFilter, VISIBILITY, asyncAction } from "../action/action.jsx";
import Addtodo from "../component/addtodo.jsx";
import Todolist from "../component/todolist.jsx";
import Footer from "../component/footer.jsx";
import "./style.css";

class App extends React.Component{

	componentDidMount(){
		const { dispatch } = this.props;
		dispatch(asyncAction());
	}

	render(){
		const { dispatch, visibleTodos, visibilityFilter } = this.props;
		return(
			<div>
				<Addtodo onAddClick = { text => dispatch(addTodo(text)) }/>
				<Todolist todos = { visibleTodos } onTodoClick = { index => dispatch(completeTodo(index)) }/>
				<Footer filter = { visibilityFilter } onFilterChange = { nextFilter => dispatch(setVisibilityFilter(nextFilter)) }/>
			</div>
		)
	}
};

App.propTypes = {
	visibleTodos : PropTypes.arrayOf(PropTypes.shape({
		text : PropTypes.string.isRequired,
		completed : PropTypes.bool.isRequired
	}).isRequired).isRequired,
	visibilityFilter : PropTypes.oneOf([
			"SHOW_ALL",
			"SHOW_COMPLETED",
			"SHOW_ACTIVE"
		]).isRequired
};

function selectTodos(todos, filter){
	switch(filter){
		case VISIBILITY.SHOW_ALL:
			return todos;
		case VISIBILITY.SHOW_COMPLETED:
			return todos.filter( todo => todo.completed );
		case VISIBILITY.SHOW_ACTIVE:
			return todos.filter( todo => !todo.completed );
	}
};

//通过connect组件，连接store与App容器组件，select方法会接收从store传递而来的state，选择性拼接后连同dispatch方法以属性方式传递与App组件
function select(state){
	return{
		visibleTodos : selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter : state.visibilityFilter
	}
};

//select可理解为中间件
export default connect(select)(App);

