// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// STARTER VALUES
const initialState = {
  messages: [
    {
      id: "e48e7ef6-643d-4f58-9a88-80327ed1485e",
      date: "måndag 3 Nov, 09:23",
      message:
        "Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.",
      writer: "Snodden",
    },
    {
      id: "e48e7ef6-427d-4f58-9a88-80327ed1485e",
      date: "tisdag 3 Nov, 12:21",
      message:
        "ICA Trumpenten har stängt, jag repeterar. ICA Trumpenten har spelat sitt susta tut! Var försiktiga där ute, detta håller på att balla ur!",
      writer: "Fagotten",
    },
    {
      id: "e48e7ef6-327d-4f58-9a88-80327ed1485e",
      date: "onsdag 3 Nov, 12:21",
      message: "Detta är bara lite random text som jag inte orkar skriva",
      writer: "The Man",
    },
    {
      id: "e98e7ef1-322d-4f58-9a88-80327ed1485f",
      date: "torsdag 3 Nov, 12:21",
      message:
        "detta är lite mer text som jag verkligen inte orkar skriva men som finns här nu",
      writer: "The Woman",
    },
    {
      id: "e38e2ef1-012d-4f58-9a88-80327ed1485e",
      date: "fredag 3 Nov, 12:21",
      message: "Mjau Mjau Mjau Mjau",
      writer: "The Cat",
    },
  ],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addNewMessageToMessageStack: (state, action) => {
      state.messages.push(action.payload);
    },

    deleteMessageFromMessageStack: (state, action) => {
      const messageIdToDelete = action.payload;
      state.messages = state.messages.filter(
        (message) => message.id !== messageIdToDelete
      );
    },
  },
});

export const { addNewMessageToMessageStack, deleteMessageFromMessageStack } =
  messagesSlice.actions;

export default messagesSlice.reducer;
