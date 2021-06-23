import React, {Component} from 'react';

export default class PostComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    var element = (<div> [element variable] </div>)

    return (
      <div className="post">
      <p> rendered the Post component: </p>
        <div className="post-photo">{this.props.photo}</div>
        <div classname="post-caption">{this.props.caption}</div>
        {element}
      </div>
    )
  }
}
