import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
});

interface CardsState {
  cards: any[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CardsState = {
  cards: [],
  isLoading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = [...state.cards, ...action.payload];
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Errore durante il caricamento delle cards.";
      });
  },
});

export default cardsSlice.reducer;
