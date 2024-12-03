import "./TeamsSidebar.css";
import pic7 from "./assets/pic7.png";
import pic8 from "./assets/pic8.png";
import pic9 from "./assets/pic9.png";
export function TeamsSidebar() {
  const teams = [
    { id: 1, name: "Team Rookies", description: "14 Description", img: pic7 },
    { id: 2, name: "Team Navy", description: "14 Description", img: pic8 },
    { id: 3, name: "Team Navy", description: "14 Description", img: pic9 },
    { id: 4, name: "Team Navy", description: "14 Description", img: pic7 },
    { id: 5, name: "Team Navy", description: "14 Description", img: pic8 },
    { id: 6, name: "Team Navy", description: "14 Description", img: pic9 },
    { id: 7, name: "Team Navy", description: "14 Description", img: pic7 },
  ];

  return (
    <div className="teams-sidebar mt-5 border-0 bg-white p-4">
      <h5 className="mb-3">Teams</h5>
      {teams.map((team) => (
        <div key={team.id} className="card border-0 mb-3 p-2 shadow-sm">
          <div className="d-flex align-items-center">
            <img
              src={team.img}
              alt={team.name}
              className="rounded"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="ms-3">
              <h6 className="mb-0">{team.name}</h6>
              <small className="text-muted">{team.description}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
