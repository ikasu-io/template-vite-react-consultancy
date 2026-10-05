import { useId, useMemo, useRef, useState } from 'react'
import { bisectCenter, extent, range } from 'd3-array'
import { scaleLinear } from 'd3-scale'
import { area, curveMonotoneX, line } from 'd3-shape'

import type { Case } from '@/data/cases'
import { useInView } from '@/hooks/use-in-view'
import { useWidth } from '@/hooks/use-width'
import { cn } from '@/lib/utils'

const monthFormat = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' })
const shortMonth = new Intl.DateTimeFormat('en-GB', { month: 'short' })

function monthDate(start: string, offset: number) {
  const [year, month] = start.split('-').map(Number)
  return new Date(year, month - 1 + offset, 1)
}

function formatValue(value: number, unit: string) {
  const number = value.toLocaleString('en-GB', { maximumFractionDigits: 1 })
  return unit === '%' ? `${number}%` : `${number} ${unit}`
}

interface Props {
  metric: Case['metric']
  /** Small: a sparkline for the card. Large: axes and hover values. */
  size?: 'small' | 'large'
  className?: string
}

/**
 * The key metric of a case, month by month, with the launch of the new
 * service marked. D3 computes the scales and paths; React draws the SVG.
 */
export function MetricChart({ metric, size = 'small', className }: Props) {
  const large = size === 'large'
  const id = useId()
  const ref = useRef<SVGSVGElement>(null)
  const frame = useRef<HTMLElement>(null)
  const visible = useInView(ref)
  // The large chart is drawn at its real width, so its labels stay readable
  // on a phone; the small one simply scales.
  const measured = useWidth(frame, 320, large)
  const width = large ? measured : 320
  const height = large ? (width < 500 ? 240 : 300) : 96
  const margin = large ? { top: 24, right: 12, bottom: 32, left: 40 } : { top: 10, right: 6, bottom: 10, left: 6 }
  const [hover, setHover] = useState<number | null>(null)

  const { x, y, linePath, areaPath, yTicks, xTicks } = useMemo(() => {
    const indexes = range(metric.values.length)
    const [min = 0, max = 0] = extent(metric.values)
    const x = scaleLinear()
      .domain([0, metric.values.length - 1])
      .range([margin.left, width - margin.right])
    const y = scaleLinear()
      .domain([Math.min(0, min), max * 1.08])
      .range([height - margin.bottom, margin.top])
      .nice()
    const linePath = line<number>()
      .x((i) => x(i))
      .y((i) => y(metric.values[i]))
      .curve(curveMonotoneX)(indexes)
    const areaPath = area<number>()
      .x((i) => x(i))
      .y0(y.range()[0])
      .y1((i) => y(metric.values[i]))
      .curve(curveMonotoneX)(indexes)
    const xTicks = indexes.filter((i) => i % (width < 500 ? 4 : 3) === 0)
    return { x, y, linePath, areaPath, yTicks: y.ticks(4), xTicks }
  }, [metric, width, height, margin.left, margin.right, margin.top, margin.bottom])

  const last = metric.values.length - 1
  const shown = hover ?? last
  const launchX = x(metric.launch)

  function onPointerMove(event: React.PointerEvent<SVGSVGElement>) {
    const svg = ref.current
    if (!svg) return
    const box = svg.getBoundingClientRect()
    const px = ((event.clientX - box.left) / box.width) * width
    setHover(bisectCenter(range(metric.values.length), x.invert(px)))
  }

  return (
    <figure ref={frame} className={cn('relative min-w-0', className)} data-visible={visible}>
      <svg
        ref={ref}
        viewBox={`0 0 ${width} ${height}`}
        width={large ? width : undefined}
        height={large ? height : undefined}
        className={cn('overflow-visible', large ? 'block max-w-full' : 'h-auto w-full')}
        role="img"
        aria-labelledby={`${id}-desc`}
        onPointerMove={large ? onPointerMove : undefined}
        onPointerLeave={large ? () => setHover(null) : undefined}
      >
        <title id={`${id}-desc`}>
          {`${metric.name}: ${formatValue(metric.values[0], metric.unit)} in ${monthFormat.format(monthDate(metric.start, 0))}, ${formatValue(metric.values[last], metric.unit)} in ${monthFormat.format(monthDate(metric.start, last))}. New service launched ${monthFormat.format(monthDate(metric.start, metric.launch))}.`}
        </title>
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cobalt)" stopOpacity={0.22} />
            <stop offset="100%" stopColor="var(--cobalt)" stopOpacity={0} />
          </linearGradient>
        </defs>

        {large &&
          yTicks.map((tick) => (
            <g key={tick}>
              <line x1={margin.left} x2={width - margin.right} y1={y(tick)} y2={y(tick)} stroke="var(--stone)" />
              <text x={margin.left - 10} y={y(tick)} dy="0.32em" textAnchor="end" className="fill-muted-foreground text-[12px]">
                {tick.toLocaleString('en-GB')}
              </text>
            </g>
          ))}
        {large &&
          xTicks.map((i) => (
            <text key={i} x={x(i)} y={height - 8} textAnchor="middle" className="fill-muted-foreground text-[12px]">
              {shortMonth.format(monthDate(metric.start, i))}
            </text>
          ))}

        {/* Before the launch in grey, after it in peach. */}
        <rect
          x={launchX}
          y={margin.top}
          width={width - margin.right - launchX}
          height={height - margin.top - margin.bottom}
          fill="var(--peach)"
          opacity={0.18}
        />
        <line
          x1={launchX}
          x2={launchX}
          y1={margin.top - (large ? 8 : 4)}
          y2={height - margin.bottom}
          stroke="var(--ink)"
          strokeDasharray="3 3"
        />
        <text
          x={launchX + 6}
          y={margin.top - (large ? 8 : 4)}
          dy="0.7em"
          className={cn('fill-foreground font-medium', large ? 'text-[13px]' : 'text-[15px]')}
        >
          Launch
        </text>

        <path d={areaPath ?? undefined} fill={`url(#${id}-fill)`} />
        <path
          d={linePath ?? undefined}
          pathLength={1}
          className="chart-line"
          fill="none"
          stroke="var(--cobalt)"
          strokeWidth={large ? 3 : 2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={x(shown)} cy={y(metric.values[shown])} r={large ? 6 : 4} fill="var(--cobalt)" stroke="var(--card)" strokeWidth={2} />
        {large && hover !== null && (
          <line x1={x(hover)} x2={x(hover)} y1={margin.top} y2={height - margin.bottom} stroke="var(--cobalt)" strokeOpacity={0.4} />
        )}
      </svg>
      {large && (
        <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm">
          <span className="text-muted-foreground">{metric.name}</span>
          <span aria-live="polite" className="tabular-nums">
            <span className="text-muted-foreground">{monthFormat.format(monthDate(metric.start, shown))}: </span>
            <strong className="font-semibold">{formatValue(metric.values[shown], metric.unit)}</strong>
          </span>
        </figcaption>
      )}
    </figure>
  )
}
