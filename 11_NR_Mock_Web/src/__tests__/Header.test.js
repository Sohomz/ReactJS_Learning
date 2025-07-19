import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header.js";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appstore from "../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

it("should load Header component with a login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const lgInBtn = screen.getByRole("button");
  expect(lgInBtn).toBeInTheDocument();
});

it("should load cart component with a 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const lenCart = screen.getByText("Cart (0)");
  expect(lenCart).toBeInTheDocument();
});

it("should change if click on login btn to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logInbtn = screen.getByRole("button", { name: "Log in" });
  fireEvent.click(logInbtn);
  const valueChanged = screen.getByText("Log out");
  expect(valueChanged).toBeInTheDocument();
});
