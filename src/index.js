import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BarGraph from './BarGraph';

const margin = { top: 40, right: 0, bottom: 40, left: 0 };
const data = {
    "buckets": [
        "2000-4000",
        "4000-6000",
        "6000-8000",
        "8000-10000",
        "10000++"
    ],
    "histograms": [
        {
            "title": "samurai",
            "data": [
                {
                    "title": "CM Failover Realtime",
                    "buckets": [
                        220,
                        83,
                        59,
                        30,
                        158
                    ]
                },
                {
                    "title": "CM Page View",
                    "buckets": [
                        380,
                        127,
                        99,
                        71,
                        217
                    ]
                },
                {
                    "title": "CM Ad Click",
                    "buckets": [
                        411,
                        137,
                        90,
                        46,
                        89
                    ]
                },
                {
                    "title": "HB Rendered Ad",
                    "buckets": [
                        451,
                        191,
                        90,
                        57,
                        194
                    ]
                },
                {
                    "title": "HB Provider Response",
                    "buckets": [
                        250,
                        122,
                        57,
                        36,
                        255
                    ]
                }
            ]
        },
        {
            "title": "Sherlock Drop Alert",
            "data": [
                {
                    "title": "HB Rendered Ad",
                    "buckets": [
                        256,
                        77,
                        48,
                        22,
                        47
                    ]
                },
                {
                    "title": "CM Page View",
                    "buckets": [
                        208,
                        86,
                        49,
                        43,
                        200
                    ]
                },
                {
                    "title": "CM Ad Click",
                    "buckets": [
                        66,
                        35,
                        18,
                        11,
                        52
                    ]
                },
                {
                    "title": "HB Provider Response",
                    "buckets": [
                        135,
                        57,
                        102,
                        60,
                        462
                    ]
                },
                {
                    "title": "HB Publisher Slot Impressions",
                    "buckets": [
                        194,
                        77,
                        29,
                        22,
                        67
                    ]
                }
            ]
        },
        {
            "title": "Publisher_Dashboard",
            "data": [
                {
                    "title": "HB Rendered Ad",
                    "buckets": [
                        46,
                        15,
                        6,
                        3,
                        21
                    ]
                },
                {
                    "title": "HB Publisher Slot Impressions",
                    "buckets": [
                        50,
                        11,
                        7,
                        3,
                        20
                    ]
                },
                {
                    "title": "HB Auction Participants",
                    "buckets": [
                        3,
                        2,
                        1,
                        0,
                        1
                    ]
                },
                {
                    "title": "CXT Url Reporting",
                    "buckets": [
                        4,
                        0,
                        1,
                        1,
                        0
                    ]
                }
            ]
        },
        {
            "title": "DMM",
            "data": [
                {
                    "title": "DMM Auction Participants",
                    "buckets": [
                        1502,
                        213,
                        78,
                        42,
                        85
                    ]
                },
                {
                    "title": "DMM Rendered Ad",
                    "buckets": [
                        1502,
                        213,
                        78,
                        42,
                        85
                    ]
                },
                {
                    "title": "HB Rendered Ad",
                    "buckets": [
                        65,
                        17,
                        3,
                        3,
                        9
                    ]
                },
                {
                    "title": "CM Page View",
                    "buckets": [
                        60,
                        27,
                        8,
                        1,
                        4
                    ]
                },
                {
                    "title": "CM Ad Click",
                    "buckets": [
                        14,
                        1,
                        2,
                        0,
                        3
                    ]
                }
            ]
        },
        {
            "title": "CM-ADMIN",
            "data": [
                {
                    "title": "CM Page View",
                    "buckets": [
                        100,
                        139,
                        167,
                        184,
                        2436
                    ]
                }
            ]
        }
    ]
};
const config = {
  "colors": [
      "#EA5B5A",
      "#52ACEE",
      "#8A63AF",
      "#62CCA8",
      "#AECB56",
      "#F36B00",
      "#528CA3",
      "#D02382",
      "#FFDAA7",
      "#45E2EA",
      "#C2C4CC",
      "#DB1F00",
      "#6A3A27",
      "#A4180D",
      "#3D9678",
      "#004FAF",
      "#650C7C",
      "#9E7C00",
      "#EA5B5A",
      "#52ACEE",
      "#62CCA8",
      "#E69EA7",
      "#EDBE00"
  ],
  "fontFamily": "Lato",
  "fontColor": "#545a6a",
  "hoverlineColor": "#cccccc",
  "tickTextColor": "#868ea5",
  "axesLabelColor": "#868ea5",
  "minHeight": 240
}

ReactDOM.render(
  <React.StrictMode>
    <BarGraph
      width={1000}
      height={1000}
      data={data}
      titleDimension={"Appname"}
      config={config}
      margin={margin}
      isStacked={false}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
