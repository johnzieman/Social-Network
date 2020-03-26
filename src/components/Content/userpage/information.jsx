import React from 'react';
import classes from './information.module.css'
import ProfileStatus from './status';

const InformationPart = (props) => {
    if(!props.profile){
        return <div>No Photo</div>
    }
    return (
        <div className={classes.content}>
            <div className={classes.menuMainContent}> User's background</div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                avatar and informations
            </div>
            <ProfileStatus status={'hello '}/>
        </div>
    );
}

export default InformationPart; 