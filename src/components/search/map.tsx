import styled from "styled-components";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";
import * as React from "react";
import { compose, withProps } from "recompose";

const MapWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  height: 500px;
  margin-top: 20px;
  padding: 50px;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAP_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    options={{
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#212121",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#181818",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1b1b1b",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#2c2c2c",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8a8a8a",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#373737",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#3c3c3c",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e4e4e",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d",
            },
          ],
        },
      ],
    }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class AppMap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export { MapWrapper, AppMap };
