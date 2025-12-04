import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Sell() {
  const [form, setForm] = useState({
    name: "",
    batch: "",
    rollNumber: "",
    mobileNumber: "",
    productName: "",
    price: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/products`, form);
    alert("Item listed successfully!");
    setForm({
      name: "",
      batch: "",
      rollNumber: "",
      mobileNumber: "",
      productName: "",
      price: "",
    });
  };

  return (
    <div className="py-3">
      {/* Heading */}
      <h2 className="text-thapar fw-bold mb-2">Sell Your Item</h2>
      <p className="text-muted mb-4">
        Fill in the details below to list your item on the TU Marketplace. Buyers will contact you directly.
      </p>

      {/* Tips Section */}
      <div className="alert alert-light border shadow-sm mb-4">
        <h6 className="fw-semibold mb-2">💡 Tips for a Good Listing</h6>
        <ul className="small text-muted mb-0">
          <li>Describe the item properly in the product name (e.g., “Engineering Maths – 1 Book”) </li>
          <li>Keep the price realistic for faster selling.</li>
          <li>Buyers will ask for images on WhatsApp — keep pictures ready.</li>
        </ul>
      </div>

      {/* Form Card */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit} className="row g-3">

            {Object.keys(form).map((key) => (
              <div className="col-md-6" key={key}>
                <label className="form-label text-capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  className="form-control"
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <p className="small text-muted mt-2">
              Images can’t be uploaded — buyers will request them on WhatsApp.
            </p>

            <button className="btn btn-thapar-main mt-3 px-4">Submit Listing</button>
          </form>
        </div>
      </div>
    </div>
  );
}
