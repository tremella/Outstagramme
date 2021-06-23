import React, {Component} from 'react';

export default class PostComponent extends Component {

// props will hold all the params passed as input to this component
  constructor(props) {
    super(props)
  }

  render(){
    const element = (<div> [element variable] </div>)
    return (<div className="comptext">
      <p> rendering the POST component: </p>
      {this.props.caption}
      {element}
      {this.props.photo}
      <button> {element} in a button</button>

    </div>)
  }
}
