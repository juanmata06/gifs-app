import { describe, expect, test } from "vitest";

import { render, screen } from "@testing-library/react";

import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
	const title = "Test title";
	const description = "Test description";

	test("should the title correctly", () => {
		render(<CustomHeader title={title} />);
		// screen.debug();
		expect(screen.getByText(title)).toBeDefined();
	});

	test("should render the description when provided", () => {
		render(<CustomHeader title={title} description={description} />);
		// screen.debug();
		expect(screen.getByText(description)).toBeDefined();
		expect(screen.getByRole("paragraph")).toBeDefined();
		expect(screen.getByRole("paragraph").innerHTML).toBe(description);
	});

	test("should not render the description when not provided", () => {
		const { container } = render(<CustomHeader title={title} />);

		const divElement = container.querySelector("content-center");

		const pElement = divElement?.querySelector("p");
		
        // screen.debug();
		
        expect(pElement).toBeUndefined();
	});
});
