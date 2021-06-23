import React, {Component} from 'react';

export default class FeedComponent extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="feed">
        <p> {this.props.allPosts} </p>
      </div>
    )
  }
}
