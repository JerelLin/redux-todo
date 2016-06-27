"use strict";
import { combineReducers } from "redux";
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VISIBILITY } from "../action/action.jsx";

const { SHOW_ALL } = VISIBILITY;

//处理过滤请求
function visibilityFilter(state = SHOW_ALL, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

//处理todo的添加、完成请求
function todos(state = [ ], action){
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				{
					text : action.text,
					completed : false
				}
			];
		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index),
				Object.assign({ }, state[action.index], {
					completed : true
				}),
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
};

const todoApp = combineReducers({ visibilityFilter, todos });
export default todoApp;