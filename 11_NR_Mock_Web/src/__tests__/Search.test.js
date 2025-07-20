import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA_S from "../Mocks/SearchMockData.json";

it("should render the Body component with Search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

// it uses this mock implementation instead of making a real network request.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_S), // Return your static mock data
  })
);
it("should render 7 cards inside Body component from MOCK_DATA_S", async () => {
  // The fetch mock defined above will be used here
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const addToCartBtn = screen.getAllByRole("button", { name: "Add to cart" });
  expect(addToCartBtn.length).toBe(7);
});

it("should render the required items/cards after search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("default-search");

  //change the value inside input, target is same like event (e.target.value="chinese")
  fireEvent.change(searchInput, { target: { value: "chinese" } });

  //click the search btn
  fireEvent.click(searchBtn);

  //checking how many card should render after clicking on search btn
  const addToCartBtn = screen.getAllByRole("button", { name: "Add to cart" });
  expect(addToCartBtn.length).toBe(3);
});
