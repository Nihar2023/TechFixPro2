import React from 'react'

function dashboard() {
  return (
    <div>
       {/* Right Side */}
 <div className='right-side'>
 <h2>Repair Requests</h2>

 {/* Pickup Section */}
 <h3 className="section-title">📦 Pickup Service</h3>
 <div className="cards-container">
   {pickupItems.map(item => (
     <div key={item.id} className="card">
       <h3>{item.company} {item.model}</h3>
       <p><strong>Device:</strong> {item.device}</p>
       <p><strong>Issues:</strong> {item.issues.join(', ')}</p>
       <p><strong>Description:</strong> {item.description}</p>
       <p><strong>Address:</strong> {item.address}</p>
       <p><strong>Mobile No:</strong> {item.mobileNo}</p>
       <p><strong>Date:</strong> {item.date}</p>
     </div>
   ))}
 </div>

 {/* Visit Section */}
 <h3 className="section-title">🧑‍🔧 Visit Service</h3>
 <div className="cards-container">
   {visitItems.map(item => (
     <div key={item.id} className="card">
       <h3>{item.company} {item.model}</h3>
       <p><strong>Device:</strong> {item.device}</p>
       <p><strong>Issues:</strong> {item.issues.join(', ')}</p>
       <p><strong>Description:</strong> {item.description}</p>
       <p><strong>Address:</strong> {item.address}</p>
       <p><strong>Mobile No:</strong> {item.mobileNo}</p>
       <p><strong>Date:</strong> {item.date}</p>
     </div>
   ))}
 </div>
</div>
    </div>
  )
}

export default dashboard
