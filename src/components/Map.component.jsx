import React, {Fragment} from 'react';
import '../App.css';
import Spaceports from '../data/spaceports';
import MAPBOX_ACCESS_TOKEN from './Token.component';
import initialViewState from './InitialState.component';

//Deckgl imports
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
  
class Map extends React.Component {
    _renderTooltip() {
      const {hoveredObject, pointerX, pointerY} = this.state || {};
      return hoveredObject && (
        <div className="tools" style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
         <h4> {hoveredObject.name }</h4>
         <p>{hoveredObject.country}</p>
         <p>{hoveredObject.description}</p>
        </div>
      );
    }

    _Welcome() {
      return (
        <div className="welcome" style={{position: 'absolute', zIndex: 7, padding: '4px', pointerEvents: 'click', left: 3, top: 2}}>
            <h2>World Spaceports</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet, neque ac gravida placerat, nisi nibh congue diam, id sodales magna purus sit amet nisi. Sed pretium nulla vulputate odio tincidunt, eget consectetur justo convallis. </p>
            <p><a href="https://github.com/nomadicvince/world_spaceports" target="_blank" rel="noopener noreferrer">Github</a></p>
        </div>
      );
    }

    render() {
      const layers = [
        new ScatterplotLayer({
          id: 'scatter-plot',
          data: Spaceports,
          getPosition: d => d.position,
          radiusMinPixels: 0.25,
          getRadius: d => d.radius,
          getFillColor: d => [255, 4, 0],
          pickable: true,
          onHover: info => this.setState({
            hoveredObject: info.object,
            pointerX: info.x,
            pointerY: info.y
          })
        })
      ];
  
      return (
        <Fragment>
          <DeckGL
            initialViewState={initialViewState}
            controller={true}
            layers={layers}            
          >
            <StaticMap           
              preventStyleDiffing 
              mapStyle = 'mapbox://styles/mapbox/satellite-streets-v10'
              mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} 
            />
          </DeckGL>
          { this._renderTooltip() }
          { this._Welcome() }
        </Fragment>
      );
    }
  }

export default Map;