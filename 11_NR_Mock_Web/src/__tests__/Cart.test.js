import { act, fireEvent, render, screen } from "@testing-library/react";
import ResturantMenu from "../components/ResturantMenu";
import Header from "../components/Header";
import MOCK_DATA from "../Mocks/ResMenuMockData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "../utils/appStore";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should load restaurantManu component", async () => {
  await act(async () => {
    render(
      // Providing store as it needed and Adding header, Cart as cart item number to be checked
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  //find Recommended (20) text so that we can click on the Accordian menu drop down
  const recmnd20 = screen.getByText("Recommended (20)");

  //click on the drop down
  fireEvent.click(recmnd20);

  //check if there are 20 menus in drop down
  //get the btn with ADD+ text
  const addPlusBtn = screen.getAllByRole("button", { name: "ADD+" });
  expect(addPlusBtn.length).toBe(20);

  //click on ADD+ btn for the first item
  fireEvent.click(addPlusBtn[0]);

  //check the header if there are 1 item showing in the cart
  const lenCartH = screen.getByText("Cart (1)");
  expect(lenCartH).toBeInTheDocument();

  //resturant menu have 20 items + cart page should have 1 item
  //Check if there are 1 item inside the cart using ADD+ btn checking
  const addPlusBtnCart = screen.getAllByRole("button", { name: "ADD+" });
  expect(addPlusBtnCart.length).toBe(21);

  //check if click on clear btn
  const clrBtnClick = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clrBtnClick);
  const lenCartclr = screen.getByText("Cart (0)");
  expect(lenCartclr).toBeInTheDocument();
});
