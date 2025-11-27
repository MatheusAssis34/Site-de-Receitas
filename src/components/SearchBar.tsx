import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void; 
}

export function SearchBar({ placeholder = "Pesquisar...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
