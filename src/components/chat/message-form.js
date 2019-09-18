import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { addMessage } from 'actions';


import './style.less';


const mstp = (state) => ({
    user: state.user.name
});

const mdtp = { addMessage };

@connect(mstp, mdtp)
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    
    get isEmpty() {
        const { text } = this.state;
        return (text.trim() === '');
    }

    onChange = (event) => {
        this.setState({ text: event.target.value });
    };
    
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (!this.isEmpty) {
                this.onSubmit();
            }
        }
    };

    onSubmit = () => {
        const { user, addMessage } = this.props;
        const { text } = this.state;
        
        addMessage(user, text, Number(new Date()));
        this.setState({ text: '' });
    };

    render() {
        const { text } = this.state;

        return (
            <Form className="message-form">
                <Form.Group>
                    <Form.Control placeholder="Введите сообщение"
                        value={text}
                        onKeyPress={this.onKeyPress}
                        onChange={this.onChange} />
                </Form.Group>
                
                <Form.Group>
                    <Button disabled={this.isEmpty} onClick={this.onSubmit}>
                        Отправить
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}
