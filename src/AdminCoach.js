import { App } from "./App";
import { StatsCard } from "./StatsCard";
import { PracticePlans } from "./PracticePlans";
import { TeamActivities } from "./TeamActivities";
import { TeamsSidebar } from "./TeamsSidebar";
import { Teams } from "./Teams";
import pic4 from "./assets/pic4.png";

export default function AdminCoach() {
  return (
    <App>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-9 px-4">
            <h2 className="mt-4">Dashboard</h2>
            <div className="row mt-4">
              <div className="col-12">
                <StatsCard />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-md-6 mb-3">
                <PracticePlans />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <TeamActivities />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-md-12 mb-3">
                <div className="card border-0 mt-6">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="h5 text-muted mb-0">Sub Coaches</h3>
                      <button className="btn btn-link fw-semibold text-dark">
                        Add Sub Coach
                      </button>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-5">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-circle bg-light border d-flex justify-content-center align-items-center"
                          style={{ width: "58px", height: "55px" }}
                        >
                          <img
                            src={pic4}
                            alt="Coach"
                            className="rounded-circle"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 bg-light p-4">
            <div className="row mt-4">
              <div className="col-12-md-12">
                <TeamsSidebar />
              </div>
              <div className="col-12-md-12">
                <Teams />
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}
