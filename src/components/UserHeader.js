import React from 'react'
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;

        if(!user){
            return null;
        }

        const { name } = user;

        return (
            <div className="header">
                {name}
            </div>
        )
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    const { userId } = ownProps;

    return {
        user: users.find((user) => user.id === userId)
    };
};

export default connect(
    mapStateToProps,
)(UserHeader);