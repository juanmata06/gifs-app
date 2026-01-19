import {
	CustomHeader,
	CustomSearchBar,
	GifsList,
	RecentSearches,
} from "@components";

import { UseGifs } from "./useGifs";

export const GifsApp = () => {
	const {
		handleSearch,
		previousSearches,
		handleSearchClicked,
		gifs,
	} = UseGifs();

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
