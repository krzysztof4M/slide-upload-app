import React, { Component } from 'react';
import Slides from './components/Slides';
import SlidePreview from './components/SlidePreview';
import Upload from './components/Upload';


const slides = [
  {
    id: 1,
    url: 'img/slide1.svg',
    title: 'Chart design'
  },
  {
    id: 2,
    url: 'img/slide2.svg',
    title: 'Traction thr ee'
  },
  {
    id: 3,
    url: 'img/slide3.svg',
    title: 'Valuation slide'
  }
]

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      slides: [],
      currentSlide: 1,
      isLoading: true,
      logo: []
    }
    this.setSlide = this.setSlide.bind(this)
    this.removeLogo = this.removeLogo.bind(this)
    this.uploadLogo = this.uploadLogo.bind(this)
  }

  setSlide(id){
    this.setState({currentSlide: id})
  }

  componentDidMount() {
    this.setState({
      slides: slides,
      isLoading: false
    })
  }

  getSlide(id){
    return this.state.slides.filter(function(obj){
      return obj.id == id
    })[0]
  }

  uploadLogo(files){
    this.setState({logo: files})
  }

  removeLogo(){
    this.setState({logo: []})
  }

  displayContent(){
    if (this.state.isLoading == true) {
      return <div className="alert alert-info" role="alert">Loading ...</div>
    }

    return (
      <div>
        <h1>Slide App</h1>
        <div className="row">
          <Slides
            slides={slides}
            setSlide={this.setSlide}
            currentSlide={this.state.currentSlide} />
          <SlidePreview
            slide={this.getSlide(this.state.currentSlide)}
            removeLogo={this.removeLogo}
            logo={this.state.logo[0]} />
        </div>
        <div className="row">
          <Upload
            removeLogo={this.removeLogo}
            uploadLogo={this.uploadLogo} />
        </div>
      </div>
    )
  }

  render() {
    const {slides} = this.state
    return (
      <div className="container">
        {this.displayContent()}
      </div>
    );
  }
}
