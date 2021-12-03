import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Col from "react-bootstrap/Col";
import "./googleApiWrapper.scss"


export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <div  className={"mt-5  "}>

                <Col   xs={12}>
                    <Map google={this.props.google}
                         className="sizes"
                         onClick={this.onMapClicked}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow} google={this.props.google} >
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>

                </Col>

            </div>

        )
    }
}

export default GoogleApiWrapper(
    (props) => ({
            apiKey: "AIzaSyBxrjaB0VTNUF9PRI_K0n4N56xokA8WO94",

        }
    ))(MapContainer)