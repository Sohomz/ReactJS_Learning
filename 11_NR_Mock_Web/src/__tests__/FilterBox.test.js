import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA_S from "../Mocks/SearchMockData.json";

it("should render the Body component with Filter button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const filterBtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });
  expect(filterBtn).toBeInTheDocument();
});

// it uses this mock implementation instead of making a real network request.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_S), // Return your static mock data
  })
);
it("should render the required items/cards after filter", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const filterBtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });

  //click the filter btn
  fireEvent.click(filterBtn);

  //checking how many card should render after clicking on filter btn
  const addToCartBtn = screen.getAllByRole("button", { name: "Add to cart" });
  expect(addToCartBtn.length).toBe(2);
});
