import { setCookie, deleteCookie } from '../../utils/utils';
import {
    registerUser,
    loginProfile,
    logoutProfile,
    updateToken,
    getDataUser,
    updateDataUser,
    forgotPasswordUser,
    resetPasswordUser
} from '../../utils/auth-api';

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_REQUEST = "REGISTER_REQUEST";
export const LOGIN_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_ERROR = "REGISTER_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";

export const GET_DATA_USER_REQUEST = "GET_DATA_USER_REQUEST";
export const GET_DATA_USER_SUCCESS = "GET_DATA_USER_SUCCESS";
export const GET_DATA_USER_ERROR = "GET_DATA_USER_ERROR";

export const UPDATE_DATA_USER_REQUEST = "UPDATE_DATA_USER_REQUEST";
export const UPDATE_DATA_USER_SUCCESS = "UPDATE_DATA_USER_SUCCESS";
export const UPDATE_DATA_USER_ERROR = "UPDATE_DATA_USER_ERROR";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const register = (email, password, name) => {
    return function(dispatch) {
        dispatch({
            type: REGISTER_REQUEST
        });
        registerUser(email, password, name)
            .then((res) => {
                if (res.success) {
                    setCookie('token', res.accessToken);
                    localStorage.setItem('refreshToken', res.refreshToken);
                    dispatch({
                        type: REGISTER_SUCCESS,
                        user: res.user
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: REGISTER_ERROR
                })
            });
    }
}

export const login = (email, password) => {
    return function(dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });
        loginProfile(email, password)
            .then((res) => {
                if (res.success) {
                    setCookie('token', res.accessToken);
                    localStorage.setItem('refreshToken', res.refreshToken);
                    dispatch({
                        type: LOGIN_SUCCESS,
                        user: res.user
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: LOGIN_ERROR
                })
            });
    }
}

export const updateTokenData = (token) => {
    return function(dispatch) {
        dispatch({
            type: UPDATE_TOKEN_REQUEST
        });
        updateToken(token)
            .then((res) => {
                if (res.success) {
                    setCookie('token', res.accessToken);
                    localStorage.setItem('refreshToken', res.refreshToken);
                    dispatch({
                        type: UPDATE_TOKEN_SUCCESS
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: UPDATE_TOKEN_ERROR
                })
            });
    }
}

export const logout = () => {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        logoutProfile()
            .then((res) => {
                if (res.success) {
                    localStorage.removeItem('refreshToken');
                    deleteCookie('token');
                    dispatch({
                        type: LOGOUT_SUCCESS
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: LOGOUT_ERROR
                })
            });
    }
}

export const getUser = () => {
    return function(dispatch) {
        dispatch({
            type: GET_DATA_USER_REQUEST
        });
        getDataUser()
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: GET_DATA_USER_SUCCESS,
                        user: res.user
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                if (localStorage.getItem('refreshToken')) {
                    dispatch(updateTokenData());

                } else {
                    dispatch({
                        type: GET_DATA_USER_ERROR
                    })
                }
            });
    }
}

export const updateUser = (email, name) => {
    return function(dispatch) {
        dispatch({
            type: UPDATE_DATA_USER_REQUEST
        });
        updateDataUser(email, name)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: UPDATE_DATA_USER_SUCCESS,
                        user: res.user
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                if (localStorage.getItem('refreshToken')) {
                    dispatch(updateTokenData());
                    dispatch(updateUser(email, name));
                } else {
                    dispatch({
                        type: UPDATE_DATA_USER_ERROR
                    })
                }
            });
    }
}

export const forgotPassword = (email) => {
    return function(dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        });
        forgotPasswordUser(email)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: FORGOT_PASSWORD_SUCCESS
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FORGOT_PASSWORD_ERROR
                })
            });
    }
}

export function resetPassword(password, token) {
    return function(dispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        });
        resetPasswordUser(password, token)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: RESET_PASSWORD_ERROR
                })
            });
    }
}

