import React, {Component} from 'react';

export default class FeedComponent extends Component {

  render() {
    return (
      <div className="feed">
        {this.props.allPosts}
      </div>
    )
  }
}
