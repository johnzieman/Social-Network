import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux file/profileReducer';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../redux file/hoc/withAuthRedirect';
  
class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }
    
    render(){
        return( <Content {...this.props} profile={this.props.profile} /> )
    }
}

let mapStateToProps = (state) =>({
   profile: state.profilePage.profile
});

let composeAll = compose( connect(mapStateToProps, {getUserProfile} ),
                 withRouter,
                 withAuthRedirect) (ProfileContainer)



export default composeAll; 