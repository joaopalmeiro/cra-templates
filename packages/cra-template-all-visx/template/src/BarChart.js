import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { letterFrequency as data } from '@visx/mock-data';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import { format } from 'd3-format';

const width = 500;
const height = 500;
const verticalMargin = 120;
const leftMargin = 30;

const xMax = width - leftMargin;
const yMax = height - verticalMargin;

const xAccessor = (d) => d.letter;
const yAccessor = (d) => d.frequency;

const xScale = scaleBand({
  range: [0, xMax],
  domain: data.map(xAccessor),
  padding: 0.4,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, Math.max(...data.map(yAccessor))],
  nice: true,
});

const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, xAccessor);
const yPoint = compose(yScale, yAccessor);

function BarChart() {
  return (
    <svg width={width} height={height}>
      <Group left={leftMargin} top={verticalMargin / 2}>
        {data.map((d, i) => {
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - yPoint(d);

          const barX = xPoint(d);
          const barY = yMax - barHeight;

          return (
            <Bar
              key={`bar-${i}`}
              x={barX}
              y={barY}
              height={barHeight}
              width={barWidth}
              fill="#006a71"
            />
          );
        })}

        <AxisLeft scale={yScale} tickFormat={format('.1~%')} />
        <text
          y={xScale.bandwidth() + xScale.bandwidth() / 2}
          transform="rotate(-90)"
          fontSize={10}
          fontFamily={'Arial'}
          textAnchor={'end'}
        >
          Letter Frequency (English)
        </text>

        <AxisBottom scale={xScale} top={yMax} numTicks={data.length} />
      </Group>
    </svg>
  );
}

export default BarChart;
