import pic6 from "./assets/pic6.jpg";
export function Teams() {
  const teams = [
    { id: 1, name: "Team Rookies", description: "14 Description", img: pic6 },
    { id: 2, name: "Team Navy", description: "14 Description", img: pic6 },
    { id: 2, name: "Team Navy", description: "14 Description", img: pic6 },
  ];

  return (
    <div className="mt-5 bg-white p-4">
      <h5 className="mb-3">Teams</h5>
      {teams.map((team) => (
        <div key={team.id} className="card mb-3 border-0 p-2 shadow-sm">
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
