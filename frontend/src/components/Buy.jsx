import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Buy() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [batchFilter, setBatchFilter] = useState("all");

  const loadItems = async () => {
    try {
      const res = await axios.get(`${API}/products`);
      setItems(res.data);
    } catch (err) {
      console.error("Error loading items:", err);
      alert("Failed to load items.");
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleBuy = async (item) => {
    // Show contact info
    alert(
      `Contact Seller:\n\n` +
        `Name: ${item.name}\n` +
        `Batch: ${item.batch}\n` +
        `Roll No: ${item.rollNumber}\n` +
        `Mobile: ${item.mobileNumber}\n\n` +
        `Ask for item images on WhatsApp before buying.`
    );

    // Remove from DB + refresh list
    try {
      await axios.delete(`${API}/products/${item._id}`);
      loadItems();
    } catch (err) {
      console.error("Error removing item:", err);
      alert("Failed to remove item from list, but you still have seller contact.");
    }
  };

  // Unique batch options for filter
  const batches = [
    ...new Set(
      items
        .map((i) => (i.batch || "").trim())
        .filter((b) => b.length > 0)
    ),
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.productName.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchesBatch =
      batchFilter === "all" ||
      (item.batch && item.batch.toLowerCase() === batchFilter.toLowerCase());

    return matchesSearch && matchesBatch;
  });

  return (
    <div className="py-3">
      {/* Heading */}
      <h2 className="text-thapar fw-bold mb-2">Available Items</h2>
      <p className="text-muted mb-4">
        Browse items listed by Thapar University students. Use search and filters to quickly find what you need.
      </p>

      {/* Info Banner */}
      <div className="alert alert-light border shadow-sm mb-4">
        <strong>Note:</strong> Images are not uploaded on the site. Always ask the seller for
        photos and condition details on WhatsApp before paying.
      </div>

      {/* Search + Filter Card */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body row g-3 align-items-center">
          <div className="col-md-8">
            <label className="form-label small mb-1">Search</label>
            <input
              className="form-control"
              placeholder="Search by item name or seller name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label small mb-1">Filter by Batch</label>
            <select
              className="form-select"
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
            >
              <option value="all">All Batches</option>
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Item List */}
      <div className="row g-3">
        {filteredItems.map((item) => (
          <div className="col-md-4" key={item._id}>
            <div className="card p-3 shadow-sm product-card h-100">

              <h5 className="fw-semibold text-thapar mb-1">
                {item.productName}
              </h5>

              <p className="text-muted small mb-1">
                <strong>Seller:</strong> {item.name}
              </p>
              <p className="text-muted small mb-1">
                <strong>Batch:</strong> {item.batch}
              </p>
              <p className="text-muted small mb-1">
                <strong>Roll No:</strong> {item.rollNumber}
              </p>
              <p className="text-muted small mb-1">
                <strong>Mobile:</strong>{" "}
                <span className="fw-semibold">{item.mobileNumber}</span>
              </p>
              <p className="text-muted small mb-2">
                <strong>Price:</strong> ₹{item.price}
              </p>

              <button
                className="btn btn-thapar-main mt-auto w-100"
                onClick={() => handleBuy(item)}
              >
                Buy (Remove From List)
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center text-muted mt-5">
          <h5>No matching items found.</h5>
          <p className="small">
            Try clearing the search/filter, or ask your friends to list their items on the Sell page.
          </p>
        </div>
      )}
    </div>
  );
}
