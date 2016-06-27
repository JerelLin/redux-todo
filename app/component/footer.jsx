"use strict";
import React, { Component, PropTypes } from "react";

class Footer extends React.Component{

	renderFilter(filter, name){
		if(filter == this.props.filter){
			return <em>{ name }</em>
		}else{
			return(
				<a href = "#" onClick = { () => this.props.onFilterChange(filter) }>{ name }</a>
			)
		}
	}

	render(){
		return(
			<div className="footer">
				<span> 显示 </span>
				<span>{ this.renderFilter("SHOW_ALL", "全部") }</span>
				<span>{ this.renderFilter("SHOW_COMPLETED", "已完成") }</span>
				<span>{ this.renderFilter("SHOW_ACTIVE", "执行中") }</span>
			</div>
		)
	}
};

Footer.propTypes = {
	filter : PropTypes.oneOf([
			"SHOW_ALL",
			"SHOW_COMPLETED",
			"SHOW_ACTIVE"
		]).isRequired,
	onFilterChange : PropTypes.func.isRequired
};

export default Footer;