import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
});
