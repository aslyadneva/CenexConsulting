import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNseWFkbmV2YSIsImEiOiJjazVpaGlnbncwZXBpM2VtdHZhZHhwbm80In0.0YWeTs37GdCU8CSY2BmSKg';

class Map extends Component {
  state = {
    lng: -96.7970,
    lat: 32.7767,
    zoom: 11
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom, 
      interactive: false
    });

    const marker = new mapboxgl.Marker({
      color: '#ea4435'
    }).setLngLat([this.state.lng, this.state.lat]).addTo(map);

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render () {
    return(     
      <div ref={el => this.mapContainer = el} className="mapContainer" />
    )
  }
}

export default Map