import React, { Component } from 'react';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { svgIcon: fontawesome.icon(brands.faVk).html };
    }

    /* currentTime() {
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
    } */

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.svgIcon }} />
        );
    }
}
