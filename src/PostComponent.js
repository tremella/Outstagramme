import React, {Component} from 'react';

export default class PostComponent extends Component {

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <div><img src='./icon.png' className="post-header-icon" alt=""/></div>
          <div className= "post-header-name"> allie bryll </div>
        </div>
        <div className="post-photo">{this.props.photo}</div>
        <div className="post-caption">{this.props.caption}</div>
        <div className="post-comments">{this.props.comments}</div>
      </div>
    )
  }
}
