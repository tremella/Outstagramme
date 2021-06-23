import React, {Component} from 'react';

export default class PostComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="post">
      <p> rendered the Post component: </p>
        <div className="post-photo">{this.props.photo}</div>
        <div className="post-caption">{this.props.caption}</div>
        <div className="post-comments">{this.props.comments}</div>
      </div>
    )
  }
}
