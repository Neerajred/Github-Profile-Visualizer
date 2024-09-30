import {PieChart, Pie, Cell, Legend} from 'recharts'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#d142f5',
  '#54f542',
  '#f55142',
  '#eff542',
  '#f54242',
  '#326ba8',
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const pieChart = props => {
  const {langRepo} = props
  const data = Object.entries(langRepo).map(([name, value]) => ({
    name,
    value,
  }))
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        innerRadius={40}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  )
}

export default pieChart
