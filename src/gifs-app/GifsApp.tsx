import { mockGifs } from "../mock-data";

import {
	CustomHeader,
	CustomSearchBar,
	GifsList,
	RecentSearches,
} from "../components";

export const GifsApp = () => {
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
			<RecentSearches recentSearches={['Trump', 'Real Madrid', 'GTA 6']}/>

			{/* Gifs */}
			<GifsList gifs={mockGifs} />
		</>
	);
};
