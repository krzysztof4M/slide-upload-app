import React, { Component } from 'react';
import SingleSlide from './SingleSlide';

export default class Slides extends Component {

  render() {
    return (
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-body">
              {
                this.props.slides.map((slide) => 
                  <SingleSlide
                    active={slide.id == this.props.currentSlide}
                    setSlide={this.props.setSlide}
                    key={slide.id}
                    id={slide.id}
                    title={slide.title}
                    url={slide.url} />
                )
              }
            </div>
          </div>
        </div>
    );
  }
}
