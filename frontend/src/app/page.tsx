
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend unavailable");
        }
        return response.json();
      })
      .then((data) => {
        setStatus(data.status);
      })
      .catch(() => {
        setStatus("Backend connection failed");
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">Curio</h1>

      <p className="text-gray-500">
        Less scrolling. More thinking.
      </p>

      <div className="rounded-xl border p-4">
        Backend status:{" "}
        <span className="font-semibold">{status}</span>
      </div>
    </main>
  );
}
