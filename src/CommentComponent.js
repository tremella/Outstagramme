import React, {Component} from 'react';

export default class CommentComponent extends Component {

  render() {
    return (
      <span className='comment'> {this.props.content} </span>
    )
  }
}
