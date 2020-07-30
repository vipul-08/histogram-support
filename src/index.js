import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BarGraph from './BarGraph';

const margin = { top: 40, right: 0, bottom: 40, left: 0 };
const data = {
    "values": [
        "Num Konom Queries (Konom Metrics)"
    ],
    "buckets": [
        "2000-3000",
        "3000-4000",
        "4000-5000",
        "5000-6000",
        "6000-7000",
        "7000-8000",
        "8000-9000",
        "9000-10000",
        "10000++"
    ],
    "histograms": [
        {
            "title": "samurai",
            "data": [
                {
                    "title": "CM Failover Realtime",
                    "buckets": [
                        148,
                        72,
                        47,
                        36,
                        26,
                        33,
                        18,
                        12,
                        158
                    ]
                },
                {
                    "title": "CM Page View",
                    "buckets": [
                        239,
                        141,
                        85,
                        42,
                        56,
                        43,
                        32,
                        39,
                        217
                    ]
                },
                {
                    "title": "CM Ad Click",
                    "buckets": [
                        277,
                        134,
                        85,
                        52,
                        58,
                        32,
                        28,
                        18,
                        89
                    ]
                },
                {
                    "title": "HB Rendered Ad",
                    "buckets": [
                        297,
                        154,
                        116,
                        75,
                        52,
                        38,
                        33,
                        24,
                        194
                    ]
                },
                {
                    "title": "HB Provider Response",
                    "buckets": [
                        150,
                        100,
                        75,
                        47,
                        25,
                        32,
                        23,
                        13,
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
                        174,
                        82,
                        38,
                        39,
                        18,
                        30,
                        14,
                        8,
                        47
                    ]
                },
                {
                    "title": "CM Page View",
                    "buckets": [
                        142,
                        66,
                        55,
                        31,
                        25,
                        24,
                        21,
                        22,
                        200
                    ]
                },
                {
                    "title": "CM Ad Click",
                    "buckets": [
                        45,
                        21,
                        17,
                        18,
                        6,
                        12,
                        5,
                        6,
                        52
                    ]
                },
                {
                    "title": "HB Provider Response",
                    "buckets": [
                        92,
                        43,
                        30,
                        27,
                        41,
                        61,
                        32,
                        28,
                        462
                    ]
                },
                {
                    "title": "HB Publisher Slot Impressions",
                    "buckets": [
                        127,
                        67,
                        42,
                        35,
                        16,
                        13,
                        11,
                        11,
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
                        34,
                        12,
                        12,
                        3,
                        3,
                        3,
                        0,
                        3,
                        21
                    ]
                },
                {
                    "title": "HB Publisher Slot Impressions",
                    "buckets": [
                        35,
                        15,
                        8,
                        3,
                        4,
                        3,
                        0,
                        3,
                        20
                    ]
                },
                {
                    "title": "HB Auction Participants",
                    "buckets": [
                        2,
                        1,
                        1,
                        1,
                        1,
                        0,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "title": "CXT Url Reporting",
                    "buckets": [
                        3,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1,
                        0,
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
                        1058,
                        444,
                        134,
                        79,
                        43,
                        35,
                        24,
                        18,
                        85
                    ]
                },
                {
                    "title": "DMM Rendered Ad",
                    "buckets": [
                        1058,
                        444,
                        134,
                        79,
                        43,
                        35,
                        24,
                        18,
                        85
                    ]
                },
                {
                    "title": "HB Rendered Ad",
                    "buckets": [
                        53,
                        12,
                        8,
                        9,
                        2,
                        1,
                        3,
                        0,
                        9
                    ]
                },
                {
                    "title": "CM Page View",
                    "buckets": [
                        45,
                        15,
                        19,
                        8,
                        5,
                        3,
                        0,
                        1,
                        4
                    ]
                },
                {
                    "title": "CM Ad Click",
                    "buckets": [
                        12,
                        2,
                        1,
                        0,
                        2,
                        0,
                        0,
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
                        52,
                        48,
                        62,
                        77,
                        79,
                        88,
                        103,
                        81,
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
      titleDimension="Appname"
      barDimension="Datasources"
      config={config}
      margin={margin}
      isStacked={window.location.pathname !== '/'}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
