// MapView.tsx
import React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FormSearch } from './components/FormSearch';

export const MapView: React.FC = () => {
    return (
        <div className="flex">
            <div className="absolute top-10 left-10 z-10">
                <FormSearch />
            </div>
            <Map
                initialViewState={{
                    longitude: -77.042793,
                    latitude: -12.046374,
                    zoom: 11
                }}
                style={{ width: "100vw", height: "100vh" }}
                mapStyle="https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
            />
        </div>
    );
};
