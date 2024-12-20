import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import "./CustomTooltip.scss";

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{payload[0].payload.weekEnding}</p>
        <p className="intro">{`Retail Sales: ${payload[0].value}`}</p>
        <p className="intro">{`Wholesale Sales: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
