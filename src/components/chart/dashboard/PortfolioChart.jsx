import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import PropTypes from 'prop-types';
import { curveCardinal } from 'd3-shape';
const cardinal = curveCardinal.tension(0.2);

const PortfolioChart = ({ data }) => {
    const theme = useTheme();
    const TooltipCircle = () => {
        return (
            <Box
                sx={{
                    height: '12px',
                    width: '12px',
                    borderRadius: '50%',
                    border: '1px solid',
                    borderColor: '#1d1d1d',
                    backgroundColor: 'rgba(145, 162, 242, 0.2)',
                }}
            />
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const currentData = payload[0].payload;
            const displayLabel = currentData.nameTwo || currentData.name;

            return (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        padding: '0.5rem 0.8rem',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                    }}
                >
                    <Typography variant='caption' fontWeight={700}>
                        {displayLabel}
                    </Typography>
                    {payload.map((item, index) => (
                        <Box
                            sx={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}
                            key={index}
                        >
                            <TooltipCircle color={item.fill} />
                            <Typography variant='caption'>{`${item.name}: ${item.value}`}</Typography>
                        </Box>
                    ))}
                </Box>
            );
        }

        return null;
    };

    CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
        label: PropTypes.string,
    };

    const CustomBarShape = (props) => {
        const { fill, x, y, width, height } = props;

        return (
            <rect
                x={x}
                y={y}
                width={width + 3}
                height={height}
                fill={fill}
                rx={5}
                ry={5}
            />
        );
    };

    CustomBarShape.propTypes = {
        fill: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    const CustomLegend = ({ payload }) => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                }}
            >
                {payload.map((entry, index) => (
                    <Box
                        key={`item-${index}`}
                        sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: entry.color,
                            }}
                        />
                        <Typography variant='caption' color={'text.secondary'}>
                            {entry.value}
                        </Typography>
                    </Box>
                ))}
            </Box>
        );
    };

    CustomLegend.propTypes = {
        payload: PropTypes.array,
    };
    return (
        // <ResponsiveContainer width="100%" height={180}>
        //     <LineChart data={data}>
        //         <XAxis dataKey="name" stroke="#aaa" />
        //         <Tooltip content={({ payload, label }) => {
        //             if (payload && payload.length) {
        //                 return (
        //                     <Box sx={{ backgroundColor: '#1d1d1d', padding: '10px', borderRadius: '5px' }}>
        //                         <Typography variant="caption" sx={{ color: '#fff' }}>{label}</Typography>
        //                         <Typography variant="body2" sx={{ color: '#ffeb3b' }}>Current: €{payload[0].value}</Typography>
        //                         <Typography variant="body2" sx={{ color: '#82ca9d' }}>Last Year: €{payload[1].value}</Typography>
        //                     </Box>
        //                 );
        //             }
        //             return null;
        //         }} />
        //         <Legend verticalAlign="top" align="left" iconType="circlsquare" />
        //         <Line type="monotone" dataKey="current" stroke="#ffeb3b" />
        //         <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
        //     </LineChart>
        // </ResponsiveContainer>
        <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: -25,
                    bottom: 0,
                }}
            >
                <XAxis
                    dataKey='name'
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip cursor={false} content={<CustomTooltip />} />
                <Bar
                    dataKey='cum_pnl'
                    barSize={13.88}
                    fill='#13161a'
                    shape={<CustomBarShape />}
                />
                <Bar
                    dataKey='agg_volume'
                    barSize={13.88}
                    fill='#252d3f'
                    shape={<CustomBarShape />}
                />
                <Legend content={<CustomLegend />} />
                <Area
                    type={cardinal}
                    dataKey='agg_pnl'
                    stroke={theme.palette.primary.main}
                    strokeWidth={2.5}
                    fillOpacity={0}
                    dot={true}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default PortfolioChart