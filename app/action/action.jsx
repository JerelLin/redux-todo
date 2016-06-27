"use strict";

//事件
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

//参数
export const VISIBILITY = {
	SHOW_ALL : "SHOW_ALL",
	SHOW_COMPLETED : "SHOW_COMPLETED",
	SHOW_ACTIVE : "SHOW_ACTIVE"
};

//action创建函数 
export function addTodo(text){
	return{ type : ADD_TODO, text }
};
export function completeTodo(index){
	return{ type : COMPLETE_TODO, index }
};
export function setVisibilityFilter(filter){
	return{ type : SET_VISIBILITY_FILTER, filter }
};

//异步action
export function asyncAction(){
	return function(dispatch, getState){
		setTimeout(function(){
			dispatch(addTodo("2秒钟过去啦！你还没添加新的任务，我来帮你添加一个吧！"))
		},2000)
	}
};
