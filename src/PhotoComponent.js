import React, {Component} from 'react';

export default class PhotoComponent extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <img src="default.png" className="insta-photo" alt="beach"/>
    )
  }
}
