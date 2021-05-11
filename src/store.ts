import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./features/root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./features/root-saga";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware] as const
});

sagaMiddleware.run(rootSaga);
serviceWorker.unregister();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
