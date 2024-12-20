import { CustomTickProps } from "./CustomTick.types";

const CustomTick: React.FC<CustomTickProps> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject width={60} height={50}>
        <div style={{ textAlign: 'start', padding: '10px 0', fontSize: '15px', lineHeight: '20px', color: '#aeb3c7' }}>
          {payload.value}
        </div>
      </foreignObject>
    </g>
  );
};

export default CustomTick;
