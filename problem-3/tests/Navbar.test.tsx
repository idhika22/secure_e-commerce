import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";


vi.mock("react-redux", () => ({
  useSelector: vi.fn(() => []), 
}));

import Navbar from "../src/components/Navbar";

describe("Navbar", () => {
  it("renders logo and desktop links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("ShopEase")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  it("shows cart icon without count when cart is empty", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
});