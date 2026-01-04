import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchForm from "../components/Form";

describe("SearchForm Component", () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <SearchForm onSearch={mockOnSearch} />
      </BrowserRouter>
    );
  });

  test("renders the main title", () => {
    expect(screen.getByRole("heading", { name: /find your dream property/i })).toBeInTheDocument();
  });

  
  test("renders Search Properties button", () => {
    expect(screen.getByRole("button", { name: /search properties/i })).toBeInTheDocument();
  });

  test("calls onSearch with filtered results when button is clicked", () => {
    const searchButton = screen.getByRole("button", { name: /search properties/i });
    
    fireEvent.click(searchButton);

    // onSearch should have been called at least once
    expect(mockOnSearch).toHaveBeenCalled();
    expect(mockOnSearch.mock.calls[0][0]).toBeInstanceOf(Array); // results array
  });
});
