import { useState } from "react";

import { mockGifs } from "../mock-data";

import {
	CustomHeader,
	CustomSearchBar,
	GifsList,
	RecentSearches,
} from "../components";

export const GifsApp = () => {
	const [previousSearches, setPreviousSearches] = useState<string[]>([
		"Trump",
		"Real Madrid",
		"GTA 6",
	]);

	const handleSearchClicked = (newSearch: string) => {
		console.log(newSearch);
		
	};

	return (
		<>
			{/* Header */}
			<CustomHeader
				title="Gifs searcher"
				description="Find your favorite gifs here"
			/>

			{/* Search */}
			<CustomSearchBar />

			{/* Recent search */}
			<RecentSearches searches={previousSearches} onSearchClicked={handleSearchClicked}/>

			{/* Gifs */}
			<GifsList gifs={mockGifs} />
		</>
	);
};
