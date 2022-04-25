import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface infoInterface {
  info: string[];
}

const initialStateInfo: infoInterface = {
  info: [],
};

const infoSlicer = createSlice({
  name: "info",
  initialState: initialStateInfo,
  reducers: {
    addinfo: (state, action: PayloadAction<string[]>) => {
      state.info = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    info: infoSlicer.reducer,
  },
});

export const { addinfo } = infoSlicer.actions;

export type RootState = ReturnType<typeof store.getState>;
