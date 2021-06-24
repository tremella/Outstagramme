import React, {Component} from 'react';

export default class PhotoComponent extends Component {

  render() {
    return (
      <img src={this.props.source} className="insta-photo" alt=""/>
    )
  }
}
