import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

function PostList ( {posts, getPostsAndUsers}) {
    useEffect(() => {
        getPostsAndUsers();
    }, [getPostsAndUsers]);

    let data = <p>No posts yet</p>;
    if (posts.length) {
        data = posts.map( post => (
            <div className='item' key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            </div>
        ));
    }

    return (
        <div className='ui relaxed divided list'>
            { data }
        </div>
    );
}

const mapStateToProps = state => {
    return { posts: state.posts  };
}

const mapDispatchToProps = {
    getPostsAndUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(PostList);