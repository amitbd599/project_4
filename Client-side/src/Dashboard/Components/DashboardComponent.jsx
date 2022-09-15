import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Scatter,
} from "recharts";
const DashboardComponent = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  return (
    <div className="dashboard_component">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header__text">
              <h2>Dashboard</h2>
            </div>
          </div>
        </div>
        {/* Dashboard Showing Data */}
        <div className="row items">
          <div className="col-md-3">
            <div className="wrapper">
              <div className="wrapper__body">
                <div className="text__file">
                  <h2>1254</h2>
                  <p>Total Blogs Post</p>
                </div>
                <div className="icon__file color__A">
                  <span class="mdi mdi-eye-outline"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wrapper">
              <div className="wrapper__body">
                <div className="text__file">
                  <h2>52</h2>
                  <p>Total Projects</p>
                </div>
                <div className="icon__file color__B">
                  <span class="mdi mdi-view-grid"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wrapper">
              <div className="wrapper__body">
                <div className="text__file">
                  <h2>52</h2>
                  <p>Total Comments</p>
                </div>
                <div className="icon__file color__C">
                  <span class="mdi mdi-comment-account"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wrapper">
              <div className="wrapper__body">
                <div className="text__file">
                  <h2>122</h2>
                  <p>Total Message</p>
                </div>
                <div className="icon__file color__D">
                  <span class="mdi mdi-email-open"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Showing By Pie Chart */}
        <div className="pie__chart">
          <div className="row">
            <div className="col-md-4">
              <PieChart width={500} height={500}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
            <div className="col-md-8">
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
              </ComposedChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
