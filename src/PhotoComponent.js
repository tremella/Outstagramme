import React, {Component} from 'react';

export default class PhotoComponent extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <img src={this.props.source} className="insta-photo" alt="photo"/>
    )
  }
}
