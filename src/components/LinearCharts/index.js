import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

const LinearChart = props => {
  const {commitData} = props
  const data = Object.entries(commitData).map(([name, commits]) => ({
    name,
    commits,
  }))

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="commits"
        stroke="#8884d8"
        activeDot={{r: 8}}
      />
    </LineChart>
  )
}

export default LinearChart
