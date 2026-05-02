"use client";
import React from "react";
import { Label, SearchField } from "@heroui/react";

const SearchUI = ({ search, setSearch }) => {
  return (
    <SearchField name="search">
      {/* <Label className="text-xs">Search</Label> */}
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input
          className="w-[280px]"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchField.ClearButton onClick={() => setSearch("")} />
      </SearchField.Group>
    </SearchField>
  );
};

export default SearchUI;
