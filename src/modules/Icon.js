import React, { Component } from 'react';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { svgIcon: fontawesome.icon(brands.faVk).html };
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.svgIcon }} />
        );
    }
}
