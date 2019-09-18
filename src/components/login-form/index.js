import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { userLogin } from 'actions';


import './style.less';


const mdtp = { userLogin };

@connect(null, mdtp)
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    get isEmpty() {
        const { name } = this.state;
        return (name.trim() === '');
    }

    onChange = (event) => {
        this.setState({ name: event.target.value });
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
        const { userLogin } = this.props;
        const { name } = this.state;
        
        userLogin(name);
    };

    render() {
        const { name } = this.state;

        return (
            <Container className="login-form">
                <h1>Lonesome Chat</h1>

                <Form inline>
                    <Form.Group>
                        <Form.Control placeholder="Введите имя"
                            value={name}
                            onChange={this.onChange}
                            onKeyPress={this.onKeyPress} />
                    </Form.Group>
                    
                    <Form.Group>
                        <Button disabled={this.isEmpty} onClick={this.onSubmit}>
                            Войти в чат
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}
