import { ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";

export type RootState = {
    commentText: string
    token: string
    me: MeState
}

const initialValue: RootState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {
        },
    }
}

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
    type: typeof SET_TOKEN;
    tokenValue: string;
}
export const setToken: ActionCreator<SetTokenAction> = (tokenValue) => ({
    type: SET_TOKEN,
    tokenValue,
});

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});

type Action = UpdateCommentAction
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, Action> = (state = initialValue, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.tokenValue,
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            };
        default:
            return state;
    }
}
