import React from 'react';
import { GridRows } from '@vx/grid';
import { Group } from '@vx/group';
import {max} from 'd3-array';
import moize from 'moize';
import Legend from "./Legend";
import {Text} from "@vx/text";
import { BarGroup } from '@vx/shape';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { scaleBand, scaleOrdinal, scaleLinear } from '@vx/scale';
import LegendShapeComp from './LegendShape';

const LegendShape = moize.reactSimple(LegendShapeComp);
const LEGEND_HEIGHT = 78;
const AXIS_HEIGHT = 21;

export default class BarGraph extends React.PureComponent {

  componentWillMount() {
    this.update();
  }

  defaultConfig = {
    margin: {
      top: 70,
      left: 60,
      bottom: 10,
      right: 50,
    },
    minHeight: 240,
    colors: ['rgb(107, 157, 255)', 'rgb(252, 137, 159)'],
    tooltipTimeFormat: '%b %d, %H:%M',
    tooltipTimeFormatWithoutDate: '%H:%M',
    fontFamily: 'Arial',
    fontColor: 'black',
    axisLabelSize: 10,
    legendBg: '#eee',
    legendShape: LegendShape,
    hoverlineColor: 'black',
    axesLabelColor: 'black',
    axisStroke: '#eaf0f6',
    annotation: {
      stroke: '#535353',
      strokeWidth: '1',
      style: {
        opacity: '.5',
        cursor: 'pointer',
      },
    },
    annotationCircle: {
      color: '#575d6d',
      activeColor: '#eb5b59',
      highlightColor: '#62CCA8',
      shouldHighlight: (data) => data.ci,
    },
    annotationHover: {
      strokeWidth: '4',
      style: {
        opacity: '.8',
        cursor: 'pointer',
      },
    },
    annotationActive: {
      stroke: 'yellow',
    },
  };

  arrowStyle = {
    height: '20px',
    width: '20px',
    backgroundColor: '#f5f5f5',
  };

  getConfig = (props = this.props) => {
    const config = { ...this.defaultConfig, ...props.config };
    // if (this.isDualAxis(props.data)) {
      // const { margin } = config;
      // return { ...config, margin: { ...margin, left: margin.left + 20, right: margin.right + 30 } };
    // }

    return config;
  }

  getAxisStyle = moize.simple((position = 'left', config = this.getConfig()) => ({
    hideTicks: true,
    hideAxisLine: true,
    stroke: config.axisStroke,
    tickLabelProps: (value) => ({
      fill: config.tickTextColor || config.fontColor,
      fontFamily: this.getConfig().tickTextFontFamily || this.getConfig().fontFamily,
      fontSize: (position === 'bottom' && this.shouldXAxisHighlight(value)) ? config.axisLabelSize * 1.1 : config.axisLabelSize,
      // eslint-disable-next-line no-nested-ternary
      fontWeight: (position === 'bottom') ? (this.shouldXAxisHighlight(value) ? 800 : 300) : undefined,
      dx: '-0.25em',
      dy: ['left', 'right'].includes(position) ? '0.25em' : '',
      // eslint-disable-next-line no-nested-ternary
      textAnchor: (position === 'left') ? 'end' : (position === 'right') ? 'start' : 'middle',
    }),
  }));

  getTickValues = (scale, desiredTicks) => {
    const ticks = scale.ticks(desiredTicks);
    const lastTick = ticks[ticks.length-1];
    const newLastTick = lastTick + (ticks[1] - ticks[0]);

    // if the last tick is smaller than max value, extend the scale domain
    if(lastTick < scale.domain()[1]) {
      ticks.push(newLastTick);
      scale.domain([scale.domain()[0], newLastTick]);
    }

    // returns num no.of evenly spread elements from arr
    const num = desiredTicks + 1;
    const len = ticks.length;
    const r = [];

    for(let i=0;i<num;i+=1) {
      r.push(ticks[Math.ceil(i * len / num)]);
    }

    return r;
  }

  formatYAxisTick = (num) => {
    if (num < 1) {
      return num.toFixed(2);
    } else {
      if (num >= 1e3) {
        const units = ['k', 'M', 'B', 'T'];

        const unit = Math.floor(((num).toFixed(0).length - 1) / 3) * 3;
        const num1 = (num / (`1e${unit}`)).toFixed(2).toString().replace(/\.0+$/, '');
        const unitname = units[Math.floor(unit / 3) - 1];

        return num1 + unitname;
      }

      return num;
    }
  }

  getSingleChartHeight = (props = this.props) => {
    const { height, data } = props;
    const { minHeight } = this.getConfig();
    if (!data.histograms.length) return 0;
    const chartHeight =  Math.max((height - (this.getConfig(props).margin.bottom)) / data.histograms.length, minHeight);
    return chartHeight + AXIS_HEIGHT;
  };

  getXMax = (props) => props.width - this.getConfig(props).margin.left - this.getConfig(props).margin.right;
  getYMax = (props) => this.getSingleChartHeight(props) - this.getConfig(props).margin.top - this.getConfig(props).margin.bottom;

  update(props = this.props) {
    const {
      data, titleDimension, isStacked,
    } = props;
    if (data) {
      this.marginLeft = this.getConfig(props).margin.left;
      this.marginRight = this.getConfig(props).margin.right;
      this.marginTop = this.getConfig(props).margin.top;
      this.marginBottom = this.getConfig(props).margin.bottom;
      this.singleChartHeight = this.getSingleChartHeight(props);
      this.uniqueSeriesLabel = data.histograms.reduce((accumulator,histogram) => histogram.data.reduce((acc, split) => accumulator.includes(split.title) ? acc : acc.concat(split.title), accumulator) , []);
      this.xMax = this.getXMax(props);
      this.yMax = this.getYMax(props);
      this.bucketScale = scaleBand({
        domain: data.buckets,
        padding: 0.2,
      });
      this.bucketScale.rangeRound([0, this.xMax]);
      this.legendScale = scaleOrdinal({
        domain: this.uniqueSeriesLabel,
        range: this.getConfig(props).colors,
      });
      this.numHistograms = isStacked ? 1 : data.histograms.length;

      // console.log(data.histograms);

      const stackedHistogramData =  data.histograms.reduce((accumulator,current) => {
        const dimensionOne = current.title;
        // console.log(dimensionOne,current.data);
        current.data.reduce((acc, curr) => {
          const dimensionTwo = curr.title;
          const buckets = curr.buckets;
          // console.log(dimensionOne,dimensionTwo,buckets);
          buckets.map((b,val) => val);
          return acc;
        }, []);
        return accumulator;
      } , []);

      const multiHistogramsData = data.histograms.map(({title, data}) => {
        const titleWithDimension = titleDimension ? `${titleDimension  }: ${  title}` : title;
        const formattedSeries = data.reduce((accumulator, current) => {
          const insideTitle = current.title;
          current.buckets.map((value,index) => {
            if (accumulator.length <= index) {
              accumulator = [...accumulator, []]
            }
            accumulator[index] = [...accumulator[index],{
              title: insideTitle,
              value: value,
              bucket: props.data.buckets[index],
            }];
            return true;
          });
          return accumulator;
        },[]);
        const allData = formattedSeries.reduce((acc, curr) => {
          const arr = curr.reduce((acc1, curr1) => [...acc1,curr1.value] , [])
          return [...acc, ...arr]
        } ,[]);
        const scaleY = scaleLinear({
          domain: [0, max(allData)],
          range: [ this.yMax, 0],
        });
        const tickValues = this.getTickValues(scaleY, 5);
        return {
          title: titleWithDimension,
          series: formattedSeries,
          yScale: scaleY,
          tickValues: tickValues,
        }
      });

      this.data = {
        buckets: data.buckets,
        histograms: isStacked ? [{
          series: multiHistogramsData.map((hData) => hData)
        }] : multiHistogramsData,
      };
    }
  }

  renderStackedHistogram = moize((histograms, height) => (
      <Group id="abcd" key={`xyz`} top={(height)}>
        {this.renderSingleAxis(histograms)}
      </Group>
  ));

  renderHistogram = moize((hist, ind, height) => (
      <Group id="abcd" key={`${ind}-xyz`} top={(height * ind)}>
        <Text
            fontSize={14}
            x={this.getConfig().margin.left}
            y={this.getConfig().margin.top - 15}
            textAnchor="start"
            fill={this.getConfig().fontColor}
            fontFamily={this.getConfig().fontFamily}
            fontWeight="bold"
        >
          {hist.title}
        </Text>
        {this.renderSingleAxis(hist)}
      </Group>
  ));

  renderBarGroup = (barGroupData, yScale) => {
    console.log(barGroupData);
    return (

      <BarGroup
          data={barGroupData}
          x0={(v) => v.bucket}
          x0Scale={this.bucketScale}
          x1Scale={scaleBand({
            domain: this.uniqueSeriesLabel.filter((label) => Object.keys(barGroupData[0]).includes(label)),
            padding: 0.1
          }).rangeRound([0, this.bucketScale.bandwidth()])}
          yScale={yScale}
          color={this.legendScale}
          keys={Object.keys(barGroupData[0]).filter((val) => val !== 'bucket')}
          height={this.singleChartHeight - this.marginTop}
      >
        {barGroups => barGroups.map((barGroup,ind1) => (
            <Group
                left={barGroup.x0 }
            >
              { barGroup.bars.map((bar, ind2) => (
                  <rect
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      rx={4}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        const { key, value } = bar;
                        alert(JSON.stringify({ key, value }));
                      }}
                  />
              ))}
            </Group>
        ))}
      </BarGroup>
    );
  };

  renderSingleAxis = moize(( {series, yScale, tickValues}) => series && [
    <GridRows
      top={this.marginTop}
      left={this.marginLeft}
      scale={yScale}
      numTicks={5}
      width={this.xMax}
      // key={`${chartId}-grid-row`}
    />,
    <Group id="xyzw"
      top={this.marginTop}
      left={this.marginLeft}
      // key={`${chartId}-single-axis-formatted`}
    >
          {this.renderBarGroup(series.reduce((accumulator, current) => {
            const barGroup = current.reduce((acc,cur) => {
              acc[cur.title] = cur.value;
              acc['bucket'] = cur.bucket;
              return acc
            }, {});
            return [...accumulator, barGroup];
          } ,[]), yScale)}
    </Group>,

    <AxisLeft
      top={this.marginTop}
      // key={`${chartId}-axis-left`}
      left={this.marginLeft}
      scale={yScale}
      numTicks={5}
      tickFormat={this.formatYAxisTick}
      tickValues={tickValues}
      {...this.getAxisStyle('left')}
      labelProps={{
        fill: this.getConfig().axesLabelColor,
      }}
    />,

    <AxisBottom
        width={this.props.width}
        top={this.singleChartHeight}
        left={this.marginLeft}
        scale={this.bucketScale}
        stroke={'#000000'}
        tickStroke={'#000000'}
        hideAxisLine
        tickLabelProps={() => ({
          fill: '#00000',
          fontSize: 11,
          textAnchor: 'middle',
        })}
    />,

  ]);

  render()
  {
    const { width, height } = this.props;
    const singleChartHeight = this.getSingleChartHeight(this.props);
    return (
      <div style={{ background: '#fff' }}>
        <div style={{ background: '#eee' }}>
            <Legend
              parentWidth={width}
              arrowStyle={this.arrowStyle}
              legendScale={this.legendScale}
              legendShape={this.getConfig().legendShape}
              handleLegendClick={() => {}}
              legendToggle={[]}
              uniqueSeriesLabel={this.uniqueSeriesLabel}
            />
        </div>
        <div
            className="charts-wrapper"
            style={{
              height: height - LEGEND_HEIGHT, overflowY: 'auto', overflowX: 'hidden',
            }}
        >
          <div style={{ position: 'relative', height: singleChartHeight * this.numHistograms }}>
            <svg
                width={width}
                height={(singleChartHeight * this.numHistograms) + this.getConfig().margin.bottom + this.getConfig().margin.top}
                ref={(s) => { this.svg = s; }}>
              <rect x={0} y={0} width={width} height={height * this.numHistograms} fill="white" />
              { this.props.isStacked
                  ? this.renderStackedHistogram(this.data.histograms, singleChartHeight)
                  : this.data.histograms.map((hist,ind) => this.renderHistogram(hist,ind,singleChartHeight))
              }
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
