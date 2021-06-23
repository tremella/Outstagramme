import React, {Component} from 'react';

export default class CommentComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p class='comment'> {this.props.content}</p>
    )
  }
}
