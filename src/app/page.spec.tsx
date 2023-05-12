import { render } from "@testing-library/react";
// import App from '../pages/index';
import Home from "./page";

describe("App", () => {
  test("should render properly", () => {
    const { getByText } = render(<Home />);
    const element = getByText("Get started by editing");
    expect(element).toBeDefined();
  });
});
