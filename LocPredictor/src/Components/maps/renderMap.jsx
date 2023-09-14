import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./renderMap.css"; // Import your CSS file

const RenderMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
    const markers = [
        { lat: 16.8481, lng: 74.5957 },
        { lat: 16.8435, lng: 74.6096 },
        { lat: 16.8398, lng: 74.5968 },
    ];

    const onLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);
    };

    return (
        <div className="App">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <div className="map-container"> {/* Apply styles to this container */}
                    <GoogleMap
                        onLoad={onLoad}
                        mapContainerStyle={{ height: "40vh", width: "100%" }} // Set the height here
                        center={{ lat: 16.8437, lng: 74.6009 }} // Set the initial center of the map
                        zoom={10} // Set the initial zoom level
                    >
                        {markers.map(({ lat, lng }) => (
                            <Marker position={{ lat, lng }} />
                        ))}
                    </GoogleMap>
                </div>
            )}
        </div>
    );
};

export default RenderMap;
