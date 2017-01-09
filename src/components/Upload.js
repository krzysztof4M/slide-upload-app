import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

export default class Upload extends Component {
  onDrop(files) {
    this.props.uploadLogo(files)
  }

  handleRemoveLogo(){
    this.props.removeLogo()
  }

  render() {
    return (
      <div className="col-md-12">
      	<div className="panel panel-default">
          <div className="panel-body">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <button type="button" className="btn btn-danger" onClick={this.handleRemoveLogo.bind(this)}>Remove logo</button>
          </div>
        </div>
      </div>
    );
  }
}
