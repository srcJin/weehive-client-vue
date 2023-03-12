<template>
  <div id="app">
    <grid-layout
      :layout.sync="layout1"
      :responsive-layouts="layouts"
      :col-num="12"
      :row-height="30"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
      :responsive="responsive"
      @breakpoint-changed="breakpointChangedEvent"
    >
      <grid-item
        v-for="item in layout1"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <component :is="items[item.i].content"></component>
      </grid-item>
    </grid-layout>

    <div class="layoutJSON">
      Displayed as <code>[x, y, w, h]</code>:
      <div class="columns">
        <div v-for="item in layout" v-bind:key="item.id">
          <b>{{ item.i }}</b
          >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
        </div>
      </div>
    </div>
    <!-- <hr /> -->
    <input type="checkbox" v-model="draggable" /> Draggable
    <input type="checkbox" v-model="resizable" /> Resizable
    <input type="checkbox" v-model="responsive" /> Responsive
    <br />
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import Content from "./Content";
import Chart from "./Chart";

export default {
  name: "App",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Content: Content,
    Chart: Chart,
  },
  data: () => ({
    draggable: true,
    resizable: true,
    responsive: true,
    layout1: [
    { x: 0, y: 0, w: 5, h: 10, i: "item-1"},
    { x: 0, y: 11, w: 5, h: 11, i: "item-2"},
    { x: 5, y: 0, w: 3, h: 7, i: "item-3" },
    { x: 5, y: 7, w: 3, h: 7, i: "item-4" },
    { x: 5, y: 14, w: 3, h: 7, i: "item-5" },

    ],
    items: {
      "item-1": {
        content: () => import("./Dashboard/HiveInfo.vue"),
      },
      "item-2": {
        content: () => import("./Dashboard/LineChart.vue"),
      },
      "item-3": {
        content: () => import("./Dashboard/HiveInfo.vue"),
      },
      "item-4": {
        content: () => import("./Dashboard/HiveInfo.vue"),
      },
      "item-5": {
        content: () => import("./Dashboard/Stats.vue"),
      },
    },
  }),
};
</script>

<style scoped>
.vue-grid-layout {
  /* background: #eee; */
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ffffff;
  border: 1px solid rgb(170, 170, 170);
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  /* background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
      no-repeat; */
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
