import React from 'react';
import { Content } from 'layouts';
import { PieChart, Pie, Cell, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'charts';

const data1 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const data2 = [
	{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
	{name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
	{name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
	{name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
	{name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
	{name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
	{name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class ChartPage extends React.Component {

	render() {
		const breadcrumbs = [
			{ text: 'Charts', link: '/charts', active: true }
		]
		return (
			<Content title="Charts" subTitle="Preview" breadcrumb={breadcrumbs}>	

				<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
					<Pie
						data={data1} 
						cx={300} 
						cy={200} 
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80} 
						fill="#8884d8">
						{
							data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
						}
					</Pie>
				</PieChart>
				<AreaChart width={600} height={400} data={data2}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis dataKey="name"/>
					<YAxis/>
					<Tooltip/>
					<Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
				</AreaChart>
			</Content>
		)
	}
}
export default ChartPage;