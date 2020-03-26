import React from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsersThunkCreator} from '../../redux file/usersReducer';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage } from '../../redux file/users-selector';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        // usersApi.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //     });
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
      return  <Users 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state)
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers: getUsersThunkCreator })(UsersContainer);