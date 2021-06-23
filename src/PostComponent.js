import React, {Component} from 'react';

export default class PostComponent extends Component {

// props will hold all the params passed as input to this component
  constructor(props) {
    super(props)
  }

  render(){
    const element = (<div> I'm the element variable </div>)
    return (<div className="comptext">
      <p>  rendering the POST component here </p>
      {this.props.displaytext}
      {element}
      <br />
      <button> {element} wrapped in a button</button>
      <br />
      <img src="default.png" className="insta-photo" alt="beach"/>
    </div>)
  }
}
