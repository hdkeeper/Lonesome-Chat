import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { clearMessages } from 'actions';

import MessageForm from './message-form';
import MessageLog from './message-log';

import './style.less';


const mstp = (state) => ({
    user: state.user.name
});

const mdtp = { clearMessages };

@connect(mstp, mdtp)
export default class Chat extends Component {
    onClearHistory = () => {
        const { clearMessages } = this.props;
        clearMessages();
    };

    render() {
        const { user } = this.props;

        return (
            <Container className="chat">
                <div className="chat-top">
                    <h1>{ user }</h1>
                    <Button variant="outline-danger" size="sm" onClick={this.onClearHistory}>
                        Очистить историю
                    </Button>
                </div>

                <MessageLog />
                <MessageForm />
            </Container>
        );
    }
}
