import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.alt).toBe(name);
  expect(img.src).toBe(src);
});

test("to have default image if no image is provided", async () => {
  const screen = render(
    <Pizza name="My Favorite Pizza" description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
