import { useState } from "react";

import type { Gif } from "@interfaces";

import { getGifsByQueryAction } from "@actions";

import {
	CustomHeader,
	CustomSearchBar,
	GifsList,
	RecentSearches,
} from "@components";

export const GifsApp = () => {
	const [gifs, setGifs] = useState<Gif[]>([]);
	const [previousSearches, setPreviousSearches] = useState<string[]>([]);

	const handleSearchClicked = (newSearch: string) => {
		console.log({ newSearch });
	};

	const handleSearch = async (query: string) => {
		const cleanedQuery = query.trim().toLowerCase();
		if (cleanedQuery.length === 0) return;
		if (previousSearches.includes(query)) return;
		setPreviousSearches([query, ...previousSearches].splice(0, 3));
		const gifs = await getGifsByQueryAction(cleanedQuery);
		setGifs(gifs);
	};

	return (
		<>
			{/* Header */}
			<CustomHeader
				title="Gifs searcher"
				description="Find your favorite gifs here"
			/>

			{/* Search */}
			<CustomSearchBar onQuerySearch={handleSearch} />

			{/* Recent search */}
			<RecentSearches
				searches={previousSearches}
				onSearchClicked={handleSearchClicked}
			/>

			{/* Gifs */}
			<GifsList gifs={gifs} />
		</>
	);
};
