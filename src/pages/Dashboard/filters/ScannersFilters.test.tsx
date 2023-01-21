import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { ScannersFilters } from "./ScannersFilters";

describe("Product Name select button", () => {
  test("InputLabel is Product Name", () => {
    render(
      <Provider store={store}>
        <ScannersFilters />
      </Provider>
    );
    const inputLabel = screen.getByRole("productName");
    expect(inputLabel).toHaveTextContent("Product Name");
  });
});
