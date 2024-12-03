import pic3 from "./assets/pic3.png";

export function PracticePlans() {
  const plans = [
    {
      id: 1,
      title: "Practice Plan - Head Exercise Relax",
      drills: 140,
      img: pic3,
    },
    {
      id: 2,
      title: "Practice Plan - Head Exercise Relax",
      drills: 140,
      img: pic3,
    },
    {
      id: 3,
      title: "Practice Plan - Head Exercise Relax",
      drills: 140,
      img: pic3,
    },
    {
      id: 4,
      title: "Practice Plan - Head Exercise Relax",
      drills: 140,
      img: pic3,
    },
    {
      id: 5,
      title: "Practice Plan - Head Exercise Relax",
      drills: 140,
      img: pic3,
    },
  ];

  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: "15px" }}>
      <div
        className="card-header mt-3 d-flex justify-content-between align-items-center border-0 bg-white"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="mb-0 text-start text-muted">Practice Plans</h5>
        <a
          href="/"
          className="mb-0 text-muted fw-semibold text-decoration-none text-end"
        >
          Add More
        </a>
      </div>

      <div className="card-body">
        {plans.map((plan) => (
          <div key={plan.id} className="d-flex align-items-center mb-3">
            <img
              src={plan.img}
              alt="Plan icon"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="ms-3 flex-grow-1">
              <h6 className="mb-0">{plan.title}</h6>
              <small className="text-muted">
                There are {plan.drills} Drills
              </small>
            </div>
          </div>
        ))}
        <button className="btn btn-link text-decoration-none w-100 text-end fw-semibold">
          Show All
        </button>
      </div>
    </div>
  );
}
