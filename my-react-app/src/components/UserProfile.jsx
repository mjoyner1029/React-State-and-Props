import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex', editMode: false };
        this.changeName = this.changeName.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    toggleEditMode() {
        this.setState(prevState => ({ editMode: !prevState.editMode }));
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                {this.state.editMode ? (
                    <div>
                        <p>Edit Mode: Change your name</p>
                        <button onClick={this.changeName}>Change Name</button>
                        <button onClick={this.toggleEditMode}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p>Name: {this.state.name}</p>
                        <button onClick={this.toggleEditMode}>Edit</button>
                    </div>
                )}
            </div>
        );
    }
}

export default UserProfile;
