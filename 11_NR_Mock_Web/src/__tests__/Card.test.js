import { getByText, render, screen } from "@testing-library/react";
import Card, { withOnlineLabel } from "../components/Card";
import MOCK_DATA from "../Mocks/CardMockData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render one card based on MOCK_DATA with PROPS data", () => {
  render(
    <BrowserRouter>
      <Card key={MOCK_DATA.id} passData={MOCK_DATA} />
    </BrowserRouter>
  );
  const resName = screen.getByText("Adil Hotel");
  expect(resName).toBeInTheDocument();
});

it("should render one card based on MOCK_DATA with Online label data", () => {
  const RestaurantCardOnline = withOnlineLabel(Card);
  render(
    <BrowserRouter>
      <RestaurantCardOnline key={MOCK_DATA.id} passData={MOCK_DATA} />
    </BrowserRouter>
  );
  const resName = screen.getByText("Online");
  expect(resName).toBeInTheDocument();
});
