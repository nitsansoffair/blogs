import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        const { fetchPostsAndUsers } = this.props;

        fetchPostsAndUsers();
    }

    renderList(){
        const { posts } = this.props;

        return posts.map(post => {
            const { id, title, body, userId } = post;

            return (
                <div className="item" key={id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>
                                {title}
                            </h2>
                            <p>
                                {body}
                            </p>
                        </div>
                        <UserHeader userId={userId}/>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts
    };
};

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);