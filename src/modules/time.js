import React, { Component } from 'react';
import moment from 'moment';

window.$$workspaceTimeDescriptor = window.$$workspaceTimeDescriptor || null;

clearInterval(window.$$workspaceTimeDescriptor);

const timeStyle = {
    fontWeight    : '500',
    fontSize      : '1050%',
    letterSpacing : '-5px',
    textShadow    : '1px 1px 3px rgba(0,0,0,0.2)',
    cursor        : 'default',
    userSelect    : 'none',
};

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: this.currentTime() };
    }

    currentTime() {
        return moment().format('HH:mm');
    }

    tick() {
        this.setState(() => ({ time: this.currentTime() }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <h1 style={timeStyle} className={this.props.className || ''}>{this.state.time}</h1>
        );
    }
}
