"use client";
import { useState } from "react";

export default function TestItem({ title, body, options, onSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pb-card">
      <div className="pb-card-body pb-flex pb-flex-col pb-gap-4">
        <h2 className="pb-h2">{title}</h2>
        <p className="pb-body pb-text-secondary">{body}</p>
        <div className="pb-card pb-card-outlined">
          <div className="pb-card-body pb-flex pb-flex-col pb-gap-3">
            {options?.map((option, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelected(option);
                  if (typeof onSelect === "function") onSelect(option);
                }}
                className={`w-full text-left pb-body px-3 py-2 rounded-md transition ${
                  selected === option
                    ? "bg-white/20 border border-white/20 shadow-inner"
                    : "bg-white/5 border border-white/5"
                }`}
                style={
                  selected === option
                    ? { boxShadow: "inset 0 0 12px rgba(94, 224, 255, 0.25)" }
                    : {}
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

