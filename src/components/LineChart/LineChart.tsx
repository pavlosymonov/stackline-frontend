import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import CustomTick from './components/CustomTick/CustomTick';
import CustomTooltip from './components/CustomTooltip/CustomTooltip';
import { Sale } from '../../store/productSlice';
import { ChartSale } from './LineChart.types';
import './LineChart.scss';

const RenderLineChart = ({ sales }: { sales: Sale[] }) => {
  const formattedSales = () => {
    return sales.map(
      (el: Sale) => {
        const { weekEnding, retailSales, wholesaleSales } = el;
        const date = new Date(weekEnding);
        const month = date.toLocaleString('en-US', {
          month: 'short',
          timeZone: 'UTC'
        }).toUpperCase();

        return {
          month,
          retailSales,
          wholesaleSales,
          weekEnding,
        }
      }
    );
  };

  const removeConsecutiveDuplicates = (data: ChartSale[]): ChartSale[] => {
    if (data.length === 0) return data;
  
    let previousMonth = data[0].month;
  
    return data.map((item, index) => {
      if (index !== 0 && item.month === previousMonth) {
        return { ...item, month: '' };
      } else {
        previousMonth = item.month;
        return item;
      }
    });
  };

  return (
    <div className="line-chart">
      <h2 className="line-chart-title">
        Retail Sales
      </h2>
      <div className="line-chart-content">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={
              removeConsecutiveDuplicates(
                formattedSales()
              )
            }
            margin={{ top: 20, bottom: 50 }}
          >
            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#f0f2f6', strokeWidth: 1 }}
              tickLine={false}
              interval={0}
              tickMargin={14}
              padding={{ left: 40, right: 40 }}
              tick={(props) => <CustomTick {...props} />}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="retailSales"
              stroke="#43a7f6"
              strokeWidth={4}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="wholesaleSales"
              stroke="#9ba6bf"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default RenderLineChart;
