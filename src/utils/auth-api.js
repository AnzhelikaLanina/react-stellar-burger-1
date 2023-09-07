import {getCookie, checkResponse, setCookie} from "./utils";
import {NORMA_API} from "./constants";

export const registerUser = (email, password, name) => {
    return fetch(`${NORMA_API}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, name }),
    })
        .then((res) => checkResponse(res));
}

export const loginProfile = (email, password) => {
    return fetch(`${NORMA_API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => checkResponse(res));
}

export const logoutProfile = () => {
    return fetch(`${NORMA_API}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    })
        .then((res) => checkResponse(res));
}

export const updateToken = () => {
    return fetch(`${NORMA_API}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    })
        .then((res) => checkResponse(res));
}

export const getDataUser = () => {
    return fetch(`${NORMA_API}/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: getCookie('token'),
        },
    })
        .then((res) => checkResponse(res));
}

export const updateDataUser = (email, name) => {
    return fetch(`${NORMA_API}/auth/user`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: getCookie('token'),
        },
        body: JSON.stringify( { email, name } ),
    })
        .then((res) => checkResponse(res));
}

export const forgotPasswordUser = (email) => {
    return fetch(`${NORMA_API}/api/password-reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( { email } ),
    })
        .then((res) => checkResponse(res));
}

export const resetPasswordUser = (password, token) => {
    return fetch(`${NORMA_API}/api/password-reset/reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( { password, token } ),
    })
        .then((res) => checkResponse(res));
}

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await updateToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            setCookie('refreshToken', refreshData.refreshToken);
            setCookie('accessToken', refreshData.accessToken.split('Bearer ')[1]);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};
