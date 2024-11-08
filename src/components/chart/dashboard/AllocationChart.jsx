import React from 'react'
import PropTypes from 'prop-types';

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data1 = [
    { name: 'Wins', value: 67 },
    { name: 'Losses', value: 67 },
    { name: 'Break-even', value: 50 },
];

const COLORS = ['#9A6EEA', '#ffeb3b', '#FF7043']

const CustomLabel = ({ x, y, fill, value, fontSize }) => (
    <text
        x={x}
        y={y}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontSize={fontSize}
        pointerEvents="none"
    >
        {value}
    </text>
);

CustomLabel.propTypes = {
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    fontSize: PropTypes.string.isRequired,
};

const AllocationChart = () => {
    const renderGlowFilter = () => (
        <defs>
            <filter id="glow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                <feFlood floodColor="rgba(255,255,255,0.5)" result="flood" />
                <feComposite in="flood" in2="blur" operator="in" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    );
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height={'100%'}>
                {renderGlowFilter()}
                <Pie
                    data={[{ name: 'inner', value: 100 }]}
                    cx="50%"
                    cy="50%"
                    startAngle={0}
                    endAngle={360}
                    innerRadius={0}
                    outerRadius={65}
                    fill="#15191C"
                    dataKey="value"
                    stroke="none"
                    isAnimationActive={false}
                />
                <Pie
                    activeIndex={0}
                    data={data1}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    fill="#8884d8"
                    paddingAngle={5}
                    cornerRadius={7}
                    dataKey="value"
                    stroke="none"
                    textAnchor="middle"
                >
                    <Label
                        position="center"
                        content={
                            <CustomLabel
                                x="50%"
                                y="55%"
                                fontSize="13px"
                                fill="#8E949C"
                                value="Total"
                            />
                        }
                    />
                    <Label
                        position="center"
                        content={
                            <CustomLabel
                                x="50%"
                                y="48%"
                                fontSize="20px"
                                fill="#fff"
                                value={100}
                            />
                        }
                    />
                    {data1?.map((_entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            style={{
                                filter: 'url(#glow)',
                            }}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default AllocationChart;