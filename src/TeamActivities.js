export function TeamActivities() {
  const activities = [
    { id: 1, title: "Team Rockies Activities Running", practices: 15 },
    { id: 2, title: "Team Rockies Activities Running", practices: 15 },
    { id: 3, title: "Team Rockies Activities Running", practices: 15 },
    { id: 4, title: "Team Rockies Activities Running", practices: 15 },
    { id: 5, title: "Team Rockies Activities Running", practices: 15 },
  ];

  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: "15px" }}>
      <div
        className="card-header mt-4 bg-white border-0"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="card-title mb-0">Team Activities</h5>
      </div>
      <div className="card-body px-4">
        {activities.map((activity) => (
          <div key={activity.id} className="mb-3">
            <h6 className="mb-1">{activity.title}</h6>
            <small className="text-muted">
              {activity.practices} Practices Assigned
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
