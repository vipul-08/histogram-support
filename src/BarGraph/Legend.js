import React from 'react';
import HorizontalListWrapper from 'list-wrapper';
import moize from 'moize';
import { LegendOrdinal } from '@vx/legend';

function Legend({
                    parentWidth, arrowStyle, legendToggle, legendScale, legendShape, uniqueSeriesLabel, handleLegendClick,
                }) {
    const labelTransform = ({ scale, labelFormat }) => (datum, index) => ({
        datum, index, text: datum === undefined ? '' : `${labelFormat(datum, index)}`, value: scale(datum),
    });

    return (
        <HorizontalListWrapper parentWidth={parentWidth} rightOffset={85} isVisible arrowStyle={arrowStyle} wrapperClassName="list-wrapper-prop">
            <LegendOrdinal
                scale={legendScale}
                direction="row"
                labelMargin="0 15px 0 0"
                className="samurai-vx-legend"
                onClick={handleLegendClick}
                style={{
                    display: 'flex', maxWidth: `${parentWidth - 85}px`, whiteSpace: 'nowrap', overflow: 'hidden', marginLeft: '35px', padding: '15px 0', cursor: 'pointer',
                }}
                fill={({ datum, text }) => legendToggle.map((_) => String(_)).includes(text) ? '#cecece' : legendScale(datum)}
                shape={legendShape}
                shapeWidth={10}
                shapeHeight={10}
                domain={uniqueSeriesLabel}
                labelTransform={labelTransform}
            />
        </HorizontalListWrapper>
    );
}

export default moize.react(Legend);
