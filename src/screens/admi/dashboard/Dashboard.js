import React from "react";
import { AdmiSideNav, AdmiTopNav } from "../../../component/widget/AdmiNav";
import Home from "../../home/Home";
function Dashboard() {
  return (
    <div>
      <AdmiTopNav />
      <div className="container-fluid">
        <div className="row">
          <AdmiSideNav />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <canvas
              className="my-4 w-100 chartjs-render-monitor"
              id="myChart"
              width="981"
              height="200"
              style={{ display: "block", height: "58px", width: "327px" }}
            ></canvas>
            <h1 className="h2 my-4">Dashboard</h1>
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
