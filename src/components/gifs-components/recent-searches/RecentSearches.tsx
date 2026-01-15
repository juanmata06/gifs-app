import type { FC } from "react";

interface Props {
	searches?: string[];
	onSearchClicked?: (search: string) => void;
}

export const RecentSearches: FC<Props> = ({ searches, onSearchClicked }) => {
	return (
		<div className="previous-searches">
			<h2>Recent Searches</h2>
			<ul className="previous-searches-list">
				{
					searches?.map((search, index) => (
						<li 
							key={index}
							onClick={() => onSearchClicked?.(search)}
						>
							{search}
						</li>
					))
				}
			</ul>
		</div>
	);
};
