import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_SUCCESS,
    UPDATE_TOKEN_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    GET_DATA_USER_REQUEST,
    GET_DATA_USER_SUCCESS,
    GET_DATA_USER_ERROR,
    UPDATE_DATA_USER_REQUEST,
    UPDATE_DATA_USER_SUCCESS,
    UPDATE_DATA_USER_ERROR,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from '../actions/auth';

const authInitialState = {
    user: null,
    registerRequest: false,
    registerError: false,
    isAuthChecked: false,
    loginRequest: false,
    loginError: false,
    updateTokenRequest: false,
    updateTokenError: false,
    logoutRequest: false,
    logoutError: false,
    userDataRequest: false,
    userDataError: false,
    updateUserRequest: false,
    updateUserError: false,
    forgotPasswordRequest: false,
    forgotPasswordError: false,
    resetPasswordRequest: false,
    resetPasswordError: false,
};

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                registerError: false
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                registerRequest: false,
                isAuthChecked: true
            };
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                registerRequest: false,
                registerError: true
            };
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginError: false
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.user,
                isAuthChecked: true,
                loginRequest: false
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginRequest: false,
                loginError: true
            };
        }
        case UPDATE_TOKEN_REQUEST: {
            return {
                ...state,
                updateTokenRequest: true,
                updateTokenError: false
            };
        }
        case UPDATE_TOKEN_SUCCESS: {
            return {
                ...state,
                isAuthChecked: true,
                updateTokenRequest: false
            };
        }
        case UPDATE_TOKEN_ERROR: {
            return {
                ...state,
                updateTokenRequest: false,
                updateTokenError: true
            };
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
                logoutError: false
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                user: null,
                isAuthChecked: false
            };
        }
        case LOGOUT_ERROR: {
            return {
                ...state,
                logoutRequest: false,
                logoutError: true
            };
        }
        case GET_DATA_USER_REQUEST: {
            return {
                ...state,
                userDataRequest: true,
                userDataError: false
            };
        }
        case GET_DATA_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                isAuthChecked: true,
                userDataRequest: false
            };
        }
        case GET_DATA_USER_ERROR: {
            return {
                ...state,
                userDataRequest: false,
                userDataError: true
            };
        }
        case UPDATE_DATA_USER_REQUEST: {
            return {
                ...state,
                updateUserRequest: true,
                updateUserError: false
            };
        }
        case UPDATE_DATA_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                updateUserRequest: false
            };
        }
        case UPDATE_DATA_USER_ERROR: {
            return {
                ...state,
                updateUserRequest: false,
                updateUserError: true
            };
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordError: false
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                user: action.user,
                forgotPasswordRequest: false
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordError: true
            };
        }
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordError: false
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                user: action.user,
                resetPasswordRequest: false
            };
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordError: true
            };
        }
        default: {
            return state;
        }
    }
}