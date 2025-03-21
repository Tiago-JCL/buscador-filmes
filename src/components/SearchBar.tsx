import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Buscar filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;