import {NORMA_API} from "./constants";

export const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
    return fetch(`${NORMA_API}/ingredients`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => checkResponse(res));
}

export const postOrder = (data) => {
    return fetch(`${NORMA_API}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients: data }),
    })
        .then((res) => checkResponse(res));
}