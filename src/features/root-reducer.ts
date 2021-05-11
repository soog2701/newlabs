import { combineReducers } from "@reduxjs/toolkit";
import exception from "./exceptions/reducer";

const rootReducer = combineReducers({
  // module,
  exception
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
