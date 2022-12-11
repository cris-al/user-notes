import axios from 'axios';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

export const login = (payload) => {
    return async function(dispatch){
        const data = await axios.post('http://localhost:3001/user/login', payload);
        return dispatch({
            type: LOGIN,
            data
        })
    }
}

export const register = (payload) => {
    return async function(dispatch){
        const data = await axios.post('http://localhost:3001/user/register', payload);
        return dispatch({
            type: REGISTER,
            data
        })
    }
}