// products-tabs.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver todos"];

export function ProductsTabs() {
  const [active, setActive] = useState("Celular");

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 border border-gray-200 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={cn(
            "py-2 text-xs uppercase border-r border-gray-200 last:border-r-0 transition-colors",
            active === tab
              ? "text-indigo-700 font-bold"
              : "text-gray-700 hover:text-indigo-700"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}