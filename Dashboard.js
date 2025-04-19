import React, { useEffect } from "react";

export default function Dashboard() {
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(script);

    const ads = window.adsbygoogle || [];
    ads.push({});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Welcome, {user}</h1>
        <button onClick={handleLogout} className="text-sm bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Watch Ads</h2>
          <ins className="adsbygoogle"
               style={{ display: "block" }}
               data-ad-client="ca-pub-9106340161813425"
               data-ad-slot="7478944235"
               data-ad-format="auto"></ins>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Your Earnings</h2>
          <p>$0.00 (demo)</p>
        </div>
      </div>
    </div>
  );
}
