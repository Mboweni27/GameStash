import React, { useRef } from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const detailsRef = useRef<HTMLDetailsElement>(null); // ✅ Add ref

  const currentSortOrder =
    sortOrders.find((order) => order.value === sortOrder) || sortOrders[0];

  return (
    <>
      <div className="w-40">
        <h3 className="mb-2 font-semibold text-lg px-2">Order By:</h3>
        <details ref={detailsRef} className="dropdown w-full px-2">
          {" "}
          {/* ✅ Attach ref */}
          <summary className="btn btn-primary w-full h-12">
            {currentSortOrder.label}
          </summary>
          <ul className="menu dropdown-content bg-primary text-primary-content rounded-box z-10 w-full p-2 shadow-sm">
            {sortOrders.map((order) => (
              <li
                key={order.value}
                onClick={() => {
                  onSelectSortOrder(order.value);
                  detailsRef.current?.removeAttribute("open");
                }}
              >
                <a className="hover:bg-blue-700 w-full h-12">{order.label}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </>
  );
};

export default SortSelector;
