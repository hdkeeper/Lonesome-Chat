import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.less';


const mstp = (state) => ({
    currentUser: state.user.name,
    messages: state.messages
});

@connect(mstp)
export default class MessageLog extends Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.bottom.current.scrollIntoView();
    };

    render() {
        const { currentUser, messages } = this.props;
        let lastUser = null;

        return (
            <div className="message-log">
                {messages.map((msg) => {
                    let showTitle = false;
                    if (msg.user !== lastUser) {
                        lastUser = msg.user;
                        showTitle = true;
                    }

                    return (
                        <Message key={msg.timestamp}
                            currentUser={currentUser}
                            showTitle={showTitle}
                            {...msg} /> // eslint-disable-line
                    );
                })}
                <div ref={this.bottom} />
            </div>
        );
    }
}


const Message = (props) => {
    const {
        user, text, timestamp, currentUser, showTitle
    } = props;

    const ownMsg = (user === currentUser) ? 'own' : '';
    const d = new Date(timestamp);
    const displayTime = `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;

    return (
        <div className={`message ${ownMsg}`}>
            {showTitle && (
                <div className="title">
                    <span className="user">{user}</span>
                    &nbsp;
                    <span className="time">
                        {displayTime}
                    </span>
                </div>
            )}
            <div className="text">
                {text}
            </div>
        </div>
    );
};
