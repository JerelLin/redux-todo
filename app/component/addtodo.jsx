"use strict";
import React, { Component, PropTypes } from "react";

class Addtodo extends React.Component{

    handleKeyDown(event){
        if(event.keyCode == 13){
            var text = this.refs.input.value;
            this.props.onAddClick(text);
            this.refs.input.value = "";
        }
    }

    render(){
        return(
            <div>
                <input type = "text" className = "input" placeholder = "添加任务" ref = "input" onKeyDown = { this.handleKeyDown.bind(this) }/>
            </div>
        )
    }
};

Addtodo.propTypes = {
    onAddClick : PropTypes.func.isRequired
};

export default Addtodo;