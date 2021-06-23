import React, {Component} from 'react';

export default class PostComponent extends Component {

// props will hold all the params passed as input to this component
// instead of @name, this.props.name.

  constructor(props) {
    super(props)
  }

  render(){
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
