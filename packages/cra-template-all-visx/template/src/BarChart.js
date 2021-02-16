import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { letterFrequency as data } from '@visx/mock-data';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import { format } from 'd3-format';

const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const xAccessor = (d) => d.letter;
const yAccessor = (d) => d.frequency;

const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(xAccessor),
  padding: 0.4,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(yAccessor))],
});

const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, xAccessor);
const yPoint = compose(yScale, yAccessor);

// Finally we'll embed it all in an SVG
function BarChart() {
  return (
    <svg width={width} height={height}>
      <AxisBottom scale={xScale} label="Letter (English)" top={yMax} numTicks={data.length} />

      {data.map((d, i) => {
        const barWidth = xScale.bandwidth();
        const barHeight = yMax - yPoint(d);

        const barX = xPoint(d);
        const barY = yMax - barHeight;

        return (
          <Group key={`bar-${i}`}>
            <Bar x={barX} y={barY} height={barHeight} width={barWidth} fill="#006a71" />

            <text
              key={`text-label-${i}`}
              x={barX}
              y={barY}
              dx={barWidth / 2}
              dy="-.25em"
              fontSize={8}
              textAnchor="middle"
            >
              {format('.2~%')(yAccessor(d))}
            </text>
          </Group>
        );
      })}
    </svg>
  );
}

export default BarChart;
