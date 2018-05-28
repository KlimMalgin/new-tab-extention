import 'leaflet';
import 'leaflet/dist/leaflet.css';

import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class MapComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            lat  : 55.1556,
            lng  : 61.4166,
            zoom : 12,
        };
    }

    render() {
        const position = [this.state.lat, this.state.lng];


        return (
        <div className="map-wrapper">
            <Map center={position} zoom={this.state.zoom} style={{ height: 'inherit' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        </div>
        );
    }
}

export default MapComponent;
