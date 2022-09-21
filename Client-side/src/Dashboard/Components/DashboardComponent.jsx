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
  AreaChart,
} from "recharts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  create_visitor_request_API,
  getMail,
  get_visitor_request_API,
  prevday_get_visitor_request_API,
  readBlogPost__Request__API,
  readCommentPost__Request__API,
  readPortfolioPost__Request__API,
  today_get_visitor_request_API,
  yesterday_get_visitor_request_API,
} from "../../API/API";

const DashboardComponent = () => {
  let today = new Date().toISOString().slice(0, 10);
  let yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  let prevDay = new Date(Date.now() - 48 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  useEffect(() => {
    readBlogPost__Request__API();
    readPortfolioPost__Request__API();
    getMail();
    readCommentPost__Request__API();
    today_get_visitor_request_API(today);
    yesterday_get_visitor_request_API(yesterday);
    prevday_get_visitor_request_API(prevDay);
  }, []);

  const totalBlogPost = useSelector((state) => state.BlogData.data);
  const totalProjectPost = useSelector((state) => state.PortfolioData.data);
  const totalCommentsPost = useSelector(
    (state) => state.CommentData.AllComment
  );
  const totalMassage = useSelector((state) => state.AllMassageData.MassageData);
  const todayVisitor = useSelector((state) => state.VisitorData.todayVisitor);
  const yesterdayVisitor = useSelector(
    (state) => state.VisitorData.yesterdayVisitor
  );
  const prevdayVisitor = useSelector(
    (state) => state.VisitorData.PrevDayVisitor
  );

  const visitor = [
    {
      name: "Today",
      uv: todayVisitor.length,
      Total: todayVisitor.length,
    },
    {
      name: "Yesterday",
      uv: yesterdayVisitor.length,
      Total: yesterdayVisitor.length,
    },
    {
      name: "Two Days Ago",
      uv: prevdayVisitor.length,
      Total: prevdayVisitor.length,
    },
  ];
  const Blog = [
    {
      name: "Blog",
      uv: totalBlogPost.length,
      Total: totalBlogPost.length,
    },
    {
      name: "Project",
      uv: totalProjectPost.length,
      Total: totalProjectPost.length,
    },
    {
      name: "Comment",
      uv: totalCommentsPost.length,
      Total: totalCommentsPost.length,
    },
    {
      name: "Massage",
      uv: totalMassage.length,
      Total: totalMassage.length,
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
                  <h2>{totalBlogPost.length}</h2>
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
                  <h2>{totalProjectPost.length}</h2>
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
                  <h2>{totalCommentsPost.length}</h2>
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
                  <h2>{totalMassage.length}</h2>
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
            <div className="col-md-6">
              <div>
                <ComposedChart
                  width={450}
                  height={400}
                  data={Blog}
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
                  <Bar
                    dataKey="Total"
                    barSize={20}
                    fill="#413ea0"
                    label={false}
                  />
                </ComposedChart>
              </div>
              <div className="text__left">
                <h3>Total Data Showing Graph</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <AreaChart
                  width={500}
                  height={360}
                  data={visitor}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </div>
              <div className="text__right">
                <h3>Total Visit Website Graph</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
