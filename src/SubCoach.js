import { App } from "./App";
import { StatsCard } from "./StatsCard";
import { PracticePlans } from "./PracticePlans";
import { TeamActivities } from "./TeamActivities";
import { TeamsSidebar } from "./TeamsSidebar";

export default function SubCoach() {
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
          </div>
          <div className="col-12 col-lg-3 bg-light p-4">
            <div className="row mt-4">
              <div className="col-12-md-12">
                <TeamsSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}
