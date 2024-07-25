import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, setToken } from "../reducer";

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
      if (window.__token__) {
        dispatch(setToken(window.__token__));
      }
}
