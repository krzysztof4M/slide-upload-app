import React, { Component } from 'react';

export default class SlidePreview extends Component {
  componentWillUpdate(nextProps) {
    if(this.props.slide.id !== nextProps.slide.id) {
      this.props.removeLogo()
    }
  }

  displayLogo(){
    if (this.props.logo) {
      return <img src={this.props.logo.preview} className="logo" />
    }
    return null
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="imgContainer">
              { this.displayLogo() }
              <img src={this.props.slide.url} alt="slide" />
            </div>
            <span className="slideTitle">{this.props.slide.title}</span>
          </div>
        </div>
      </div>
    );
  }
}
