<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div
        class="col-md-6 col-xl-3"
        v-for="stats in statsCards"
        :key="stats.id"
      >
        <stats-card>
          <div
            class="icon-big text-center"
            :class="`icon-${stats.type}`"
            slot="header"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
          <div
            v-if="stats.footerIcon && stats.footerText"
            class="stats"
            slot="footer"
          >
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div>
        </stats-card>
      </div>
      <div class="col-md-6 col-xl-3">
        <a
          role="button"
          @click.prevent="showModal = !showModal"
          class="d-block"
        >
          <stats-card>
            <div class="icon-big text-center icon-success" slot="header">
              <i class="ti-plus"></i>
            </div>
            <div class="numbers" slot="content">
              <p>New</p>
              Statistics
            </div>
          </stats-card>
        </a>
      </div>
    </div>
    <p-modal
      :close="handleModalClose"
      v-if="showModal"
      title="Add a new Statistics Card"
    >
      <add-stats-card :submit="addNewStat" />
    </p-modal>
    <div class="control-section">
      <div align="center">
        <ejs-chart
          style="display: block"
          align="center"
          :theme="theme"
          id="chartcontainer"
          :title="title"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :tooltip="tooltip"
          :chartArea="chartArea"
          :width="width"
          :legendSettings="legendSettings"
          :load="load"
        >
          <e-annotations>
            <e-annotation
              :content="annotationTemplate"
              region="Series"
              x="90%"
              y="12%"
            >
            </e-annotation>
          </e-annotations>
          <e-series-collection>
            <e-series
              :dataSource="seriesData"
              type="MultiColoredLine"
              xName="XValue"
              yName="YValue"
              :segments="segments"
              name="India"
              width="2"
              segmentAxis="Y"
            >
            </e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
    </div>
  </div>
</template>
<script>
import { StatsCard, AddStatsCard } from "@/components/index";
import Chartist from "chartist";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  ChartAnnotation,
  MultiColoredLineSeries,
  Tooltip,
  DateTime,
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

let dataValues = [];
[
  380,
  410,
  310,
  540,
  510,
  330,
  490,
  470,
  472,
  460,
  550,
  420,
  380,
  430,
  385,
  520,
  580,
  420,
  350,
  505,
  535,
  410,
  204,
  400,
  415,
  408,
  415,
  350,
  375,
  500,
  390,
  450,
  440,
  350,
  400,
  365,
  490,
  400,
  520,
  510,
  395,
  380,
  404,
  400,
  500,
  390,
  610,
  380,
  390,
  420,
  440,
  570,
  600,
  380,
  410,
  405,
  480,
  320,
  420,
  440,
  320,
  280,
  320,
  400,
  390,
  460,
  470,
  490,
  420,
  480,
  410,
  420,
  580,
  410,
  380,
  480,
  360,
  650,
  680,
  720,
  580,
  480,
  520,
  440,
  420,
  430,
  380,
  520,
  410,
  540,
  400,
  390,
  460,
  470,
  490,
  420,
  480,
  470,
  490,
  330,
  520,
  480,
  580,
  590,
  600,
  310,
  480,
  500,
  400,
  508,
  480,
  460,
  700,
  705,
  480,
  410,
  480,
].map(function (value, index) {
  dataValues.push({ XValue: new Date(1900 + index, 0, 1), YValue: value });
});
export default {
  name: "Dashboard",
  components: {
    StatsCard,
    AddStatsCard,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      showModal: false,
      statsCards: [
        {
          id: 1,
          type: "warning",
          icon: "ti-server",
          title: "Capacity",
          value: "105GB",
          footerText: "Updated now",
          footerIcon: "ti-reload",
        },
        {
          id: 2,
          type: "success",
          icon: "ti-wallet",
          title: "Revenue",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar",
        },
        {
          id: 3,
          type: "danger",
          icon: "ti-pulse",
          title: "Errors",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer",
        },
        {
          id: 4,
          type: "info",
          icon: "ti-twitter-alt",
          title: "Followers",
          value: "+45",
          footerText: "Updated now",
          footerIcon: "ti-reload",
        },
      ],
      
      annotationTemplate: function () {
        return {
          template: Vue.component("annotationTemplate", {
            template: `<div style="width:80px; padding: 5px;">
                                <table style="width: 100%">
                                    <tr>
                                        <td>
                                            <div style='width: 10px; height: 10px; background:blue;border-radius: 15px;'></div>
                                        </td>
                                        <td style="padding-left: 5px;">
                                            High
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style='width: 10px; height: 10px; background:green;;border-radius: 15px;'></div>
                                        </td>
                                        <td style="padding-left: 5px;">
                                            Medium
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style='width: 10px; height: 10px; background:red;;border-radius: 15px;'></div>
                                        </td>
                                        <td style="padding-left: 5px;">
                                            Low
                                        </td>
                                    </tr>
                                </table>
                            </div>`,
            data: function () {
              return { data: {} };
            },
          }),
        };
      },
      seriesData: dataValues,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        labelFormat: "y",
        intervalType: "Years",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}mm",
        rangePadding: "None",
        minimum: 200,
        maximum: 800,
        interval: 100,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0,
        },
      },
      legendSettings: { visible: false },
      width: Browser.isDevice ? "100%" : "60%",
      tooltip: {
        enable: true,
        shared: true,
      },
      segments: [
        {
          value: 450,
          color: "red",
        },
        {
          value: 500,
          color: "green",
        },
        {
          color: "blue",
        },
      ],
      title: "Annual Mean Rainfall for India",
    };
  },
  provide: {
    chart: [DateTime, Tooltip, ChartAnnotation, MultiColoredLineSeries],
  },
  methods: {
    addNewStat(data) {
      this.statsCards.push(
        Object.assign({ id: this.statsCards.length + 1 }, data)
      );
      this.showModal = false;
    },
    handleModalClose() {
      this.showModal = false;
    },
    load: function (args) {
      if (args.chart.theme === "highcontrast") {
        args.chart.series[0].segments[0].color = "#FF4741";
        args.chart.series[0].segments[1].color = "#00B400";
        args.chart.series[0].segments[2].color = "#3F9BFF";
      }
    },
    load: function (args) {
      if (args.chart.theme === "highcontrast") {
        args.chart.series[0].segments[0].color = "#FF4741";
        args.chart.series[0].segments[1].color = "#00B400";
        args.chart.series[0].segments[2].color = "#3F9BFF";
      }
    },
  },
};
</script>