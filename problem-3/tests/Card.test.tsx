import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../src/components/Card";

describe("Card component", () => {
  const mockProps = {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Test Product",
    price: 99,
  };

  it("renders product title, price, and image", () => {
    render(
      <MemoryRouter>
        <Card {...mockProps} />
      </MemoryRouter>
    );

    // Check title
    expect(screen.getByText("Test Product")).toBeInTheDocument();

    // Check price
    expect(screen.getByText("$99")).toBeInTheDocument();

    // Check image alt
    const img = screen.getByAltText("Test Product");
    expect(img).toHaveAttribute("src", mockProps.image);
  });

  it("wraps image in a link to product page", () => {
    render(
      <MemoryRouter>
        <Card {...mockProps} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${mockProps.id}`);
  });

  it("renders actionButton when provided", () => {
    render(
      <MemoryRouter>
        <Card {...mockProps} actionButton={<button>Buy Now</button>} />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toBeInTheDocument();
  });

  it("does not render actionButton when not provided", () => {
    render(
      <MemoryRouter>
        <Card {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
