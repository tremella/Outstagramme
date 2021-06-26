import React, {Component} from 'react';

export default class PostComponent extends Component {

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <div>
            <img src='./icon.png' className="post-header-icon" alt=""/>
          </div>
          <div className= "post-header-name"> {this.props.owner} </div>
        </div>
        <div className="post-photo">{this.props.photo}</div>
        <div className="post-react-bar">
          <img src='./icon_heart.png' className="post-react-icon" alt="[X]"/>
          <img src='./icon_comment.png' className="post-react-icon" alt="[X]"/>
          <img src='./icon_send.png' className="post-react-icon" alt="[X]"/>
          <img src='./icon_save.png' className="post-react-icon-right" alt="[X]"/>
        </div>
        <div className="post-caption"> <b> {this.props.owner} </b> {this.props.caption}</div>
        <div className="post-comments"> <b> so-and-so </b> {this.props.comments}</div>
        <div className="post-time"> 4 HOURS AGO </div>
      </div>
    )
  }
}
