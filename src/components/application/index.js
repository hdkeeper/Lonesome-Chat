import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginForm, Chat } from 'components';

import 'bootstrap/dist/css/bootstrap.min.css';


const mstp = (state) => ({
    user: state.user.name
});

@connect(mstp)
export default class Application extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="application">
                {user
                    ? <Chat />
                    : <LoginForm />}
            </div>
        );
    }
}
