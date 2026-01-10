import { useState } from "react";

export default function SearchAbleList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) => {
    return JSON.stringify(item)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item, idx) => (
          <li key={idx}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
