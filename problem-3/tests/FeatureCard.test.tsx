import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FeatureCard from "../src/components/FeatureCard";

describe("FeatureCard", () => {
  it("renders Card with correct props", () => {
    const product = {
      id: 1,
      name: "Test Product",
      price: 100,
      image: "/test.png",
    };

    render(
      <MemoryRouter>
        <FeatureCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });
});
