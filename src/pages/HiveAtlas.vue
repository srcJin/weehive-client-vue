<template>
  <div>
    <div class="container-fluid p-0">
      <l-map :zoom.sync="zoom" :options="mapOptions" :center="center" :bounds="bounds" :min-zoom="minZoom"
        :max-zoom="maxZoom" style="height: 60vh; width: 100%">
        <l-control-layers :position="layersPosition" :collapsed="false" :sort-layers="true" />
        <l-tile-layer v-for="tileProvider in tileProviders" :key="tileProvider.name" :name="tileProvider.name"
          :visible="tileProvider.visible" :url="tileProvider.url" :attribution="tileProvider.attribution" :token="token"
          layer-type="base" />
        <!-- <l-control-zoom :position="zoomPosition" /> -->
        <l-control-attribution :position="attributionPosition" :prefix="attributionPrefix" />
        <l-control-scale :imperial="imperial" />
        <l-marker v-for="marker in markers" :key="marker.id" :visible="marker.visible" :draggable="marker.draggable"
          :lat-lng.sync="marker.position" :icon="marker.icon" @click="alert(marker)">
          <!-- @todo add popup info for beehives -->
          <l-popup :content="marker.info" />
          <l-tooltip :content="marker.info" />
        </l-marker>

        <!-- <l-layer-group layer-type="overlay" name="Layer polyline">
          <l-polyline
            v-for="item in polylines"
            :key="item.id"
            :lat-lngs="item.points"
            :visible="item.visible"
            @click="alert(item)"
          />
        </l-layer-group> -->
        <!-- <l-layer-group
          v-for="item in stuff"
          :key="item.id"
          :visible.sync="item.visible"
          layer-type="overlay"
          name="Layer 1"
        >
          <l-layer-group :visible="item.markersVisible">
            <l-marker
              v-for="marker in item.markers"
              :key="marker.id"
              :visible="marker.visible"
              :draggable="marker.draggable"
              :lat-lng="marker.position"
              @click="alert(marker)"
            />
          </l-layer-group>
          <l-polyline
            :lat-lngs="item.polyline.points"
            :visible="item.polyline.visible"
            @click="alert(item.polyline)"
          />
        </l-layer-group> -->
      </l-map>
    </div>
    <div class="container mt-3">
      <!-- Zoom: level
      <input v-model.number="zoom" type="number" />
      position:
      <select v-model="zoomPosition">
        <option
          v-for="(position, index) in Positions"
          :key="index"
          :value="position"
        >
          {{ position }}
        </option>
      </select>
      <br />
      Center : <span> {{ center }} </span><br />
      Bounds : <span> {{ bounds }} </span><br /> -->
      <!-- <br /><br /> -->
      <!-- Contol Layers position:
      <select v-model="layersPosition">
        <option
          v-for="(position, index) in Positions"
          :key="index"
          :value="position"
        >
          {{ position }}
        </option>
      </select>
      Attribution position:
      <select v-model="attributionPosition">
        <option
          v-for="(position, index) in Positions"
          :key="index"
          :value="position"
        >
          {{ position }}
        </option>
      </select>
      <hr /> -->
      <!-- <hr /> -->
      <h3>Welcome to the world of hives!</h3>
      <table>
        <tr>
          <th>Hive</th>
          <!-- @todo find a better way to add whitespace -->
          <th> </th>
          <th> </th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Info</th>
          <!-- <th>Is Draggable ?</th>
          <th>Is Visible ?</th> -->
          <th>Remove</th>
        </tr>
        <tr v-for="(item, index) in markers" :key="index">
          <td>{{ "Hive " + (index + 1) }}</td>
          <td> </td>
          <td> </td>
          <td>
            <input v-model.number="item.position.lat" type="number" />
          </td>
          <td>
            <input v-model.number="item.position.lng" type="number" />
          </td>
          <td>
            <input v-model="item.info" type="text" />
          </td>
          <!-- <td style="text-align: center">
            <input v-model="item.draggable" type="checkbox" />
          </td>
          <td style="text-align: center">
            <input v-model="item.visible" type="checkbox" />
          </td> -->
          <td style="text-align: center">
            <input type="button" value="X" @click="removeMarker(index)" />
          </td>
        </tr>
      </table>
      <div class="mt-3">
        <button name="button" class="btn btn-primary me-3" @click="addMarker">Add a hive!</button>
        <button name="button" class="btn btn-primary" @click="fitPolyline">Find my hive!</button>
      </div>

      <!-- <table>
        <tr>
          <th>Layer</th>
          <th>Is Visible ?</th>
          <th>Are Markers visible ?</th>
          <th>Is Polyline visible ?</th>
        </tr>
        <tr v-for="(item, index) in stuff" :key="index">
          <td>{{ "Layer " + (index + 1) }}</td>
          <td style="text-align: center">
            <input v-model="item.visible" type="checkbox" />
          </td>
          <td style="text-align: center">
            <input v-model="item.markersVisible" type="checkbox" />
          </td>
          <td style="text-align: center">
            <input v-model="item.polyline.visible" type="checkbox" />
          </td>
        </tr>
      </table> -->
    </div>
  </div>
</template>

<script>
import { latLngBounds } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers,
} from "vue2-leaflet";

import "leaflet/dist/leaflet.css";
// webpack icon fix https://vue2-leaflet.netlify.app/quickstart/#marker-icons-are-missing
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("../images/defaultHiveIcon.png"),
  iconUrl: require("../images/defaultHiveIcon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// const markers1 = [
//   {
//     position: { lng: -1.219482, lat: 47.41322 },
//     visible: true,
//     draggable: true,
//   },
//   { position: { lng: -1.571045, lat: 47.457809 } },
//   { position: { lng: -1.560059, lat: 47.739323 } },
//   { position: { lng: -0.922852, lat: 47.886881 } },
//   { position: { lng: -0.769043, lat: 48.231991 } },
//   { position: { lng: 0.395508, lat: 48.268569 } },
//   { position: { lng: 0.604248, lat: 48.026672 } },
//   { position: { lng: 1.2854, lat: 47.982568 } },
//   { position: { lng: 1.318359, lat: 47.894248 } },
//   { position: { lng: 1.373291, lat: 47.879513 } },
//   { position: { lng: 1.384277, lat: 47.798397 } },
//   { position: { lng: 1.329346, lat: 47.754098 } },
//   { position: { lng: 1.329346, lat: 47.680183 } },
//   { position: { lng: 0.999756, lat: 47.635784 } },
//   { position: { lng: 0.86792, lat: 47.820532 } },
//   { position: { lng: 0.571289, lat: 47.820532 } },
//   { position: { lng: 0.439453, lat: 47.717154 } },
//   { position: { lng: 0.439453, lat: 47.61357 } },
//   { position: { lng: -0.571289, lat: 47.487513 } },
//   { position: { lng: -0.615234, lat: 47.680183 } },
//   { position: { lng: -0.812988, lat: 47.724545 } },
//   { position: { lng: -1.054688, lat: 47.680183 } },
//   { position: { lng: -1.219482, lat: 47.41322 } },
// ];

// const poly1 = [
//   { lng: -1.219482, lat: 47.41322 },
//   { lng: -1.571045, lat: 47.457809 },
//   { lng: -1.560059, lat: 47.739323 },
//   { lng: -0.922852, lat: 47.886881 },
//   { lng: -0.769043, lat: 48.231991 },
//   { lng: 0.395508, lat: 48.268569 },
//   { lng: 0.604248, lat: 48.026672 },
//   { lng: 1.2854, lat: 47.982568 },
//   { lng: 1.318359, lat: 47.894248 },
//   { lng: 1.373291, lat: 47.879513 },
//   { lng: 1.384277, lat: 47.798397 },
//   { lng: 1.329346, lat: 47.754098 },
//   { lng: 1.329346, lat: 47.680183 },
//   { lng: 0.999756, lat: 47.635784 },
//   { lng: 0.86792, lat: 47.820532 },
//   { lng: 0.571289, lat: 47.820532 },
//   { lng: 0.439453, lat: 47.717154 },
//   { lng: 0.439453, lat: 47.61357 },
//   { lng: -0.571289, lat: 47.487513 },
//   { lng: -0.615234, lat: 47.680183 },
//   { lng: -0.812988, lat: 47.724545 },
//   { lng: -1.054688, lat: 47.680183 },
//   { lng: -1.219482, lat: 47.41322 },
// ];

const tileProviders = [
  {
    name: "OpenStreetMap",
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "OpenTopoMap",
    visible: false,
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
];

export default {
  name: "Example",
  // use the created() lifecycle hook and set the document.title property
  // to the desired value, as described in my previous answer.
  // props: {
  //   pageTitle: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // created() {
  //   document.title = "this.pageTitle"; // Set the page title here
  // },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
  },
  data() {
    return {
      center: [38.0000, 27.0000],
      opacity: 1.0,
      token: "your token if using mapbox",
      mapOptions: {
        zoomControl: true,
        attributionControl: false,
        zoomSnap: true,
      },
      zoom: 2,
      minZoom: 1,
      maxZoom: 20,
      zoomPosition: "topleft",
      attributionPosition: "bottomright",
      layersPosition: "topright",
      attributionPrefix: "Vue2Leaflet HiveAtlas",
      imperial: false,
      Positions: ["topleft", "topright", "bottomleft", "bottomright"],
      tileProviders: tileProviders,
      markers: [
        {
          id: "hive1",
          position: { lat: 51.505, lng: -0.09 },
          info: "Information for hive 1 in London, UK",
          draggable: false,
          visible: true,
        },
        {
          id: "hive2",
          position: { lat: 38.9072, lng: -77.0369 },
          info: "Information for hive 2 in Washington D.C., USA",
          draggable: false,
          visible: true,
        },
        {
          id: "hive3",
          position: { lat: -33.859972, lng: 151.211111 },
          info: "Information for hive 3 in Sydney, Australia",
          draggable: false,
          visible: true,
        },
        {
          id: "hive4",
          position: { lat: 48.8566, lng: 2.3522 },
          info: "Information for hive 4 in Paris, France",
          draggable: false,
          visible: true,
        },
        {
          id: "hive5",
          position: { lat: 43.6532, lng: -79.3832 },
          info: "Information for hive 5 in Toronto, Canada",
          draggable: false,
          visible: true,
        },
        {
          id: "hive6",
          position: { lat: -34.6037, lng: -58.3816 },
          info: "Information for hive 6 in Buenos Aires, Argentina",
          draggable: false,
          visible: true,
        },
        {
          id: "hive7",
          position: { lat: 59.9139, lng: 10.7522 },
          info: "Information for hive 1 in Oslo, Norway. This hive is home to a colony of Norwegian Black bees, a local and endangered bee species.",
          draggable: false,
          visible: true,
        },
        {
          id: "hive8",
          position: { lat: -33.8688, lng: 151.2093 },
          info: "Information for hive 2 in Sydney, Australia. This hive is managed by a local beekeeper and produces honey with a unique flavor profile due to the variety of flowers in the area.",
          draggable: false,
          visible: true,
        },
        {
          id: "hive9",
          position: { lat: 40.7128, lng: -74.006 },
          info: "Information for hive 3 in New York City, USA. This hive is part of an urban beekeeping initiative that aims to support local bee populations and increase pollination in the area.",
          draggable: false,
          visible: true,
        },
        {
          id: "hive10",
          position: { lat: -23.5505, lng: -46.6333 },
          info: "Information for hive 4 in São Paulo, Brazil. This hive is located in a rooftop garden and helps to pollinate the local flora, including several fruit trees.",
          draggable: false,
          visible: true,
        },
        {
          id: "hive11",
          position: { lat: 48.8647, lng: 2.349 },
          info: "Information for hive 5 in Paris, France. This hive is managed by a local beekeeping association and serves as an educational resource for the community.",
          draggable: false,
          visible: true,
        },
      ],

      // stuff: [
      //   {
      //     id: "s1",
      //     markers: markers1,
      //     polyline: { points: poly1, visible: true },
      //     visible: true,
      //     markersVisible: true,
      //   },
      // ],
      // bounds: latLngBounds(
      //   { lat: 51.476483373501964, lng: -0.14668464136775586 },
      //   { lat: 51.52948330894063, lng: -0.019140238291583955 }
      // ),
    };
  },
  methods: {
    alert(item) {
      alert("this is " + JSON.stringify(item));
    },
    addMarker: function () {
      const newMarker = {
        position: { lat: 50.5505, lng: -0.09 },
        draggable: true,
        visible: true,
      };
      this.markers.push(newMarker);
    },
    removeMarker: function (index) {
      this.markers.splice(index, 1);
    },
    fitPolyline: function () {
      const bounds = latLngBounds(markers1.map((o) => o.position));
      this.bounds = bounds;
    },
  },
};
</script>
