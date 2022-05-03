import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends Component {
    componentDidMount(){
        console.log(this.props.fetchPosts());
    }

    render() {
        return (
            <div>PostList</div>
        )
    }
}

export default connect(null, { fetchPosts })(PostList);