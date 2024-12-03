import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
export function StatsCard() {
  return (
    <div className="row">
      {[
        { label: "Total Positions", value: "2,000", img: pic1 },
        { label: "Total Practice Plans", value: "898", img: pic2 },
        { label: "Your Total Drills", value: "1,664", img: pic3 },
        { label: "Your Assigned Teams", value: "06", img: pic1 },
      ].map((stat, idx) => (
        <div key={idx} className="col-md-6 mb-4">
          <div
            className="card shadow-sm border-0"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted small">{stat.label}</p>
                <h3 className="fw-bold">{stat.value}</h3>
              </div>
              <img
                src={stat.img}
                alt={`${stat.label} illustration`}
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
