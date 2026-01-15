import { useEffect, useState, type FC } from "react";

interface Props {
	onQuerySearch: (query: string) => void;
}

export const CustomSearchBar: FC<Props> = ({ onQuerySearch }) => {
	const [query, setQuery] = useState<string>("");

	//* Debounce pattern search:
	// useEffect(() => {
	// 	const timeoutId = setTimeout(() => {
	// 		onQuerySearch(query);
	// 	}, 700);
		
	// 	return () => {
	// 		clearTimeout(timeoutId);
	// 	};
	// }, [query, onQuerySearch]);

	const handleSearch = () => {
		onQuerySearch?.(query);
		setQuery("");
	};

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Search for gifs"
				value={query}
				onChange={(event) => setQuery(event.target.value || "")}
				onKeyDown={(event) => event.key === "Enter" && handleSearch()}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};
