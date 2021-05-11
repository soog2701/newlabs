import { ReactNode } from "react";
import {
  CaseReducer,
  PayloadAction,
  createSelector,
  createSlice
} from "@reduxjs/toolkit";

type contentType = "string" | ReactNode;
type alertType = "string" | ReactNode;

type initType = {
  contents: contentType[];
  alert: alertType[];
};

const initialState: initType = {
  contents: [], // 내용
  alert: [] // 생성된 alert
};
const name = "exception";
//const increment: CaseReducer<State, PayloadAction<number>> = (state, action) => state + action.payload

const reducers = {
  open(state: initType) {
    state.contents.push("1");
  },
  openSync(state: initType, action: PayloadAction<object>) {
    state.alert.push(action.payload);
  },
  close(state: initType) {
    state.contents.pop();
  },
  closeSync(state: initType, action: PayloadAction<object>) {
    state.alert.pop();
  },
  closeSelect(state: initType) {
    console.log(state);
  },
  closeAll(state: initType) {
    state.alert = [];
  }
};
const slice = createSlice({
  name,
  initialState,
  reducers
});

const selectAllState = createSelector(
  (state: initType) => state.contents,
  (state: initType) => state.alert,
  (contents, alert) => {
    return { contents, alert };
  }
);

export const exceptionAction = slice.actions;
export const EXCEPTION = slice.name;

export const exceptionSelector = {
  all: (state: initType) => selectAllState(state[EXCEPTION]) // [EXCEPTION]
};

export default slice.reducer;
