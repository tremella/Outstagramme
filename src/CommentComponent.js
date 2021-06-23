import React, {Component} from 'react';

export default class CommentComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p className='comment'> {this.props.content}</p>
    )
  }
}
