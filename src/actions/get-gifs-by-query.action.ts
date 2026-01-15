
import type { GiphyResponse, Gif } from "@interfaces";

import { GiphyApi } from "./giphy.api";

export const getGifsByQueryAction = async (query: string): Promise<Gif[]> => {
	const response = await GiphyApi<GiphyResponse>(`/search`, {
		params: {
			q: query,
			limit: 10,
		},
	});
	return response.data.data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		url: gif.images.original.url,
		width: Number(gif.images.original.width),
		height: Number(gif.images.original.height),
	}));
};
