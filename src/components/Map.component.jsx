import React, {Fragment} from 'react';
// import axios from 'axios';

//Deckgl imports
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidmluY2VnYWxheHkiLCJhIjoiY2sxc2lpYWc4MDNrYjNrbzVtcWhwZnZxYSJ9.-QzjwfpvBWvjopePA8T9vQ';

// Initial viewport settings
const initialViewState = {
    longitude: -75.358658,
    latitude: 39.853886,
    zoom: 2,
    pitch: 0,
    bearing: 0
  };

  
  // Data to be used by the LineLayer
const start = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

class Map extends React.Component {

    // componentDidMount() {
    //   axios.get(`https://gist.githubusercontent.com/nomadicvince/aa4f5eff2d252614366766c0c966e8f6/raw/9432359539a2ca942f613e59734770729d418919/spaceports.json`)
    //     .then(res => {
    //       console.log(res.data)
    //     })
    // }


    _renderTooltip() {
      const {hoveredObject, pointerX, pointerY} = this.state || {};
      return hoveredObject && (
        <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
          { hoveredObject.name }
        </div>
      );
    }

    render() {

      const {mapStyle = 'mapbox://styles/mapbox/light-v9'} = this.props;


      const layers = [
        new ScatterplotLayer({
          id: 'scatter-plot',
          data: [    
            {
              "id": 1,
              "name": "Kennedy Space Center/Cape Canaveral",
              "city": "Cape Canaveral",
              "state": "Florida",
              "country": "United States",
              "position": [-80.68036706, 28.5225289],
              "description": "Kennedy Space Center Visitor Complex is where rockets launch and inspiration begins at Florida's gateway to space, all just one small step from Orlando.",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "http://www.kennedyspacecenter.com",
              "radius": 70000
            },
            {
              "id": 2,
              "name": "Vandenberg AFB",
              "city": "Santa Barbara",
              "state": "California",
              "country": "United States",
              "position": [-120.6228472, 34.76405535],
              "description": "",
              "status": "active",
              "visitors": "No",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.spacelaunchschedule.com/vandenberg-rocket-launch-viewing/",
              "radius": 70000
            },
            {
              "id": 4,
              "name": "Mid-Atlantic Regional Spaceport",
              "city": "Wallops Island",
              "state": "Virginia",
              "country": "United States",
              "position": [-75.4, 37.8],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://vaspace.org/",
              "radius": 70000
            },
            {
              "id": 5,
              "name": "Pacific Spaceport Complex - Alaska",
              "city": "Kodiak Island",
              "state": "Alaska",
              "country": "United States",
              "position": [-152.337778, 57.435833],
              "description": "",
              "status": "active",
              "visitors": "No",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://akaerospace.com/",
              "radius": 70000
            },
            {
              "id": 6,
              "name": "Mojave Air and Space Port",
              "city": "Mojave",
              "state": "California",
              "country": "United States",
              "position": [-118.15284493, 35.0593227],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.mojaveairport.com/",
              "radius": 70000
            },
            {
              "id": 7,
              "name": "Spaceport America",
              "city": "Truth or Consequences",
              "state": "New Mexico",
              "country": "United States",
              "position": [-106.98279396, 32.98884905],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://spaceportamericatour.com/",
              "radius": 70000
            },
            {
              "id": 8,
              "name": "Spaceport Camden",
              "city": "Woodbine",
              "state": "Georgia",
              "country": "United States",
              "position": [ -81.514722, 30.9275],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://spaceportcamden.us/",
              "radius": 70000
            },
            {
              "id": 9,
              "name": "SpaceX South Texas Spaceport",
              "city": "Boca Chica Village",
              "state": "Texas",
              "country": "United States",
              "position": [-97.1824, 25.9923],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.spacex.com/",
              "radius": 70000
            },
            {
              "id": 10,
              "name": "Baikonur Cosmodrome",
              "city": "",
              "state": "Kyzylorda Region",
              "country": "Kazakhstan",
              "position": [63.2689235, 45.6250456],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "http://baikonurtour.com/",
              "radius": 70000
            },
            {
              "id": 11,
              "name": "Guiana Space Centre",
              "city": "",
              "state": "Kourou",
              "country": "Guiana",
              "position": [-52.7738833, 5.2123751],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "http://www.cnes-csg.fr/web/CNES-CSG-fr/10805-le-centre-spatial-guyanais.php",
              "radius": 70000
            },
                {
              "id": 12,
              "name": "Alcântara Launch Center",
              "city": "Alcântara",
              "state": "Maranhão",
              "country": "Brazil",
              "position": [-44.396389, -2.373056],
              "description": "",
              "status": "active",
              "visitors": "No",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "http://www2.fab.mil.br/cla/",
              "radius": 70000
            }, 
            {
              "id": 13,
              "name": "Xichang Space Center",
              "city": "Xichang",
              "state": "Liangshan, Sichuan",
              "country": "China",
              "position": [102.026556, 28.246017],
              "description": "",
              "status": "active",
              "visitors": "No",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "",
              "radius": 70000
            },
            {
              "id": 14,
              "name": "Tanegashima Space Center",
              "city": "",
              "state": " Kagoshima Prefecture",
              "country": "Japan",
              "position": [130.97, 30.4],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://global.jaxa.jp/about/centers/tnsc/index.html",
              "radius": 70000
            },
            {
              "id": 15,
              "name": "Uchinoura Space Center",
              "city": "",
              "state": " Kagoshima Prefecture",
              "country": "Japan",
              "position": [131.0785, 31.2523],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://global.jaxa.jp/about/centers/usc/index.html",
              "radius": 70000
            },
            {
              "id": 16,
              "name": "Rocket Lab Launch Complex 1",
              "city": "",
              "state": "Mahia Peninsula",
              "country": "New Zealand",
              "position": [177.864876, -39.2615],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.rocketlabusa.com/",
              "radius": 70000
            },    
            {
              "id": 17,
              "name": "Satish Dhawan Space Centre",
              "city": "Sriharikota",
              "state": "Andhra Pradesh",
              "country": "India",
              "position": [80.230278, 13.72],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.shar.gov.in/sdscshar/index.jsp",
              "radius": 70000
            },
             {
              "id": 18,
              "name": "Esrange Space Center",
              "city": "",
              "state": "",
              "country": "Sweden",
              "position": [21.106944, 67.893889],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.kirunalapland.se/en/see-do/ssc-esrange-visitor-center-2/",
              "radius": 70000
            },
            {
              "id": 19,
              "name": "Spaceport Cornwall",
              "city": "",
              "state": "",
              "country": "United Kingdom",
              "position": [-4.995278, 50.440833],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://spaceportcornwall.com/",
              "radius": 70000
            },
            {
              "id": 20,
              "name": "Mohammed Bin Rashid Space Center",
              "city": "Dubai",
              "state": "",
              "country": "United Arab Emirates",
              "position": [55.46689, 25.22637],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.mbrsc.ae/",
              "radius": 70000
            },
            {
              "id": 21,
              "name": "Maritime Launch",
              "city": "Canso",
              "state": "Nova Scotia",
              "country": "Canada",
              "position": [-60.982891, 45.303559],
              "description": "",
              "status": "active",
              "visitors": "Yes",
              "images": {
                "main": "photo1",
                "sidebar": "photo2"
              },
              "website": "https://www.maritimelaunch.com/",
              "radius": 70000
            }
          ],
          getPosition: d => d.position,
          radiusMinPixels: 0.25,
          getRadius: d => d.radius,
          getFillColor: d => [255, 140, 0],
          start,
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
            mapStyle = {mapStyle}
            controller={true}
            layers={layers}
            
          >

            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
          </DeckGL>
          { this._renderTooltip() }
        </Fragment>
      );
    }
  }

export default Map;