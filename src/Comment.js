// add Comment component here

import React, { Component } from 'react'
import BlogPost from './BlogPost.js'
export class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment
