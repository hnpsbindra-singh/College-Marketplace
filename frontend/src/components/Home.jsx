export default function Home() {
  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <h1 className="text-thapar fw-bold">Thapar University Marketplace</h1>
        <p className="text-muted fs-5 mt-2">
          A simple and secure platform for TU students to buy & sell essential items within campus.
        </p>
      </div>

      {/* About the site */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4">
          <h3 className="fw-semibold text-thapar mb-3">About This Platform</h3>
          <p className="text-muted">
            This website is built to help Thapar University students quickly exchange useful 
            items with each other. No outside listings, no scams, no unnecessary features—
            just students helping students.
          </p>
          <p className="text-muted">
            Every item posted here is visible only to TU students, and buyers can directly 
            contact sellers through their provided mobile number. For images, buyers can request 
            them personally.
          </p>
        </div>
      </div>

      {/* What items can be sold */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4">
          <h4 className="fw-semibold text-thapar mb-3">Items You Can Sell Here</h4>
          
          <ul className="text-muted fs-6">
            <li>📚 Semester books, notes, lab manuals</li>
            <li>🛏️ Hostel essentials (buckets, extension boards, lamps, mattresses)</li>
            <li>🚲 Cycles, fitness gear, sports equipment</li>
            <li>💻 Calculators, headphones, small electronics</li>
            <li>🪑 Study tables, chairs, organizers</li>
            <li>🥤 Water bottles, small appliances (kettles, etc.)</li>
          </ul>

          <p className="mt-3 small text-muted">
            ❗ <strong>Prohibited:</strong> Illegal items, damaged electronics, or anything 
            related to restricted substances.
          </p>
        </div>
      </div>

      {/* Get Started Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-5">
        <a href="/sell" className="btn btn-thapar-main px-4">Sell an Item</a>
        <a href="/buy" className="btn btn-outline-thapar px-4">Browse Items</a>
      </div>

      {/* Footer credit */}
      <div className="text-center mt-5">
        <p className="small text-muted">
          Made with ❤️ by <strong>Manvendra Singh Chauhan</strong>
        </p>
      </div>
    </div>
  );
}
