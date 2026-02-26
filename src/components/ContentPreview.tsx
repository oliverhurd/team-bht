import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
const chartData = {
  '2023': [
  {
    name: 'Q1',
    roi: 22
  },
  {
    name: 'Q2',
    roi: 45
  },
  {
    name: 'Q3',
    roi: 71
  },
  {
    name: 'Q4',
    roi: 92
  }],

  '2024': [
  {
    name: 'Q1',
    roi: 35
  },
  {
    name: 'Q2',
    roi: 78
  },
  {
    name: 'Q3',
    roi: 118
  },
  {
    name: 'Q4',
    roi: 155
  }],

  '2025': [
  {
    name: 'Q1',
    roi: 48
  },
  {
    name: 'Q2',
    roi: 97
  },
  {
    name: 'Q3',
    roi: 142
  },
  {
    name: 'Q4',
    roi: 184
  }]

};
export function ContentPreview() {
  const [selectedYear, setSelectedYear] = useState<'2023' | '2024' | '2025'>(
    '2025'
  );
  const currentData = chartData[selectedYear];
  const totalRoi = currentData[currentData.length - 1].roi;
  return (
    <section className="w-full px-6 py-24 md:py-32 max-w-5xl mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="text-center mb-12">

        <span className="block text-xs font-medium tracking-[0.2em] text-brave-text-secondary mb-6 uppercase">
          Proven Track Record
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-brave-text-primary mb-4 leading-tight">
          Annual Returns
        </h2>
        <p className="text-lg text-brave-text-secondary leading-relaxed font-light max-w-2xl mx-auto">
          Consistent portfolio growth through institutional order flow
          mechanics, not fleeting retail trends.
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6,
          delay: 0.15
        }}
        className="bg-brave-card border border-brave-border rounded-sm p-6 md:p-10 shadow-2xl mb-6">

        {/* Year Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex gap-3 bg-[#0A0A0A] p-1 rounded-full border border-brave-border">
            {(['2023', '2024', '2025'] as const).map((year) =>
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedYear === year ? 'bg-[#00ff88]/10 text-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.1)]' : 'text-brave-text-secondary hover:text-brave-text-primary'}`}>

                {year}
              </button>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-brave-text-secondary uppercase tracking-wider">
              Total ROI
            </span>
            <span className="text-3xl font-serif text-[#00ff88]">
              +{totalRoi}%
            </span>
          </div>
        </div>

        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={currentData}
              margin={{
                top: 10,
                right: 20,
                left: 10,
                bottom: 0
              }}>

              <defs>
                <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ff88" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#00ff88" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1C1C1C"
                vertical={false} />

              <XAxis
                dataKey="name"
                stroke="#4A4A4A"
                tick={{
                  fill: '#6B6B6B',
                  fontSize: 13
                }}
                axisLine={false}
                tickLine={false} />

              <YAxis
                stroke="#4A4A4A"
                tick={{
                  fill: '#6B6B6B',
                  fontSize: 13
                }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value: number) => `${value}%`}
                domain={[0, 'auto']} />

              <Tooltip
                contentStyle={{
                  backgroundColor: '#111',
                  borderColor: '#333',
                  borderRadius: '4px',
                  color: '#E8E0D4',
                  fontSize: '14px'
                }}
                itemStyle={{
                  color: '#00ff88'
                }}
                formatter={(value: number) => [`${value}%`, 'ROI']}
                labelStyle={{
                  color: '#6B6B6B'
                }} />

              <Area
                type="monotone"
                dataKey="roi"
                stroke="#00ff88"
                strokeWidth={2.5}
                fill="url(#greenFill)"
                animationDuration={1000}
                dot={{
                  r: 5,
                  fill: '#00ff88',
                  stroke: '#0A0A0A',
                  strokeWidth: 2
                }}
                activeDot={{
                  r: 7,
                  fill: '#00ff88',
                  stroke: '#0A0A0A',
                  strokeWidth: 2
                }} />

            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <p className="text-xs text-brave-text-muted italic text-center">
        Based on closed macro trades. Past performance does not guarantee future
        results.
      </p>
    </section>);

}