import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export const MapView = () => {
    return (
        <Map
            initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
            }}
            style={{width: "100vw", height: "100vh"}}
            mapStyle="https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
        />
    );
}