const TOKEN= "token";
const MOBILENUMBER = "mobileNumber";

export const setToken = token => {
    window.localStorage.setItem(TOKEN, token);
}

export const getToken = () => {
    return window.localStorage.getItem(TOKEN);
}

export const setMobileNumber = mobileNumber => {
    window.localStorage.setItem(MOBILENUMBER, mobileNumber);
}

export const getmobileNumber = () => {
    return window.localStorage.getItem(MOBILENUMBER);
}

export default { setToken, getToken, setMobileNumber, getmobileNumber };