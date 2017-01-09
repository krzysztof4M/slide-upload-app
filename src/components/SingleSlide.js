import React, { Component } from 'react';

export default class SingleSlide extends Component {
  handleClick(){
    this.props.setSlide(this.props.id)
  }

  setClass(){
    return this.props.active && 'activeSlide'
  }

  render() {
    return (
        <div className="col-md-4" onClick={this.handleClick.bind(this)}>
          <img src={this.props.url} alt="slide" className={this.setClass()} />
          <span className="slideTitle">{this.props.title}</span>
        </div>
    );
  }
}