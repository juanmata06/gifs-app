import type { FC } from "react";

interface Props {
	recentSearches?: string[];
}

export const RecentSearches: FC<Props> = ({ recentSearches }) => {
	return (
		<div className="previous-searches">
			<h2>Recent Searches</h2>
			<ul className="previous-searches-list">
				{
					recentSearches?.map((search, index) => (
						<li key={index}>{search}</li>
					))
				}
			</ul>
		</div>
	);
};
