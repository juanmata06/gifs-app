import { useRef, useState } from "react";

import { getGifsByQueryAction } from "@actions";

import type { Gif } from "@interfaces";

export const UseGifs = () => {
	const [gifs, setGifs] = useState<Gif[]>([]);
	const [previousSearches, setPreviousSearches] = useState<string[]>([]);
	const gifsCache = useRef<Record<string, Gif[]>>({});

	const handleSearchClicked = async (newSearch: string) => {
        if(gifsCache.current[newSearch]) {
            setGifs(gifsCache.current[newSearch]);
            return;
        }
		const gifs = await getGifsByQueryAction(newSearch);
		setGifs(gifs);
	};

	const handleSearch = async (query: string) => {
		const cleanedQuery = query.trim().toLowerCase();
		if (cleanedQuery.length === 0) return;
		if (previousSearches.includes(query)) return;
		setPreviousSearches([query, ...previousSearches].splice(0, 3));
		const gifs = await getGifsByQueryAction(cleanedQuery);
		setGifs(gifs);
		gifsCache.current[cleanedQuery] = gifs;
	};

	return {
		//*Props:
		handleSearch,
		//* Methods:
		previousSearches,
		handleSearchClicked,
		gifs,
	};
};
