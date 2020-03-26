import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Hello'
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    diaActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onBlur={this.diaActivateEditMode.bind(this)} value={this.props.status} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus