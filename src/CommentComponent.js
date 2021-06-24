import React, {Component} from 'react';

export default class CommentComponent extends Component {

  render() {
    return (
      <p className='comment'> {this.props.content}</p>
    )
  }
}
