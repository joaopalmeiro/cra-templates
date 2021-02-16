import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { letterFrequency as data } from '@visx/mock-data';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import { format } from 'd3-format';

const width = 500;
const height = 500;
const verticalMargin = 120;

const xMax = width;
const yMax = height - verticalMargin;

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

function BarChart() {
  return (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
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
                x={barX}
                y={barY}
                dx={barWidth / 2}
                dy="-.25em"
                fontSize={8}
                textAnchor="middle"
                fontFamily="Arial"
              >
                {format('.1~%')(yAccessor(d))}
              </text>
            </Group>
          );
        })}
      </Group>
    </svg>
  );
}

export default BarChart;
