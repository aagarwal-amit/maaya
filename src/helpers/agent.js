import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
//import ReactGA from 'react-ga';
import {API_ROOT} from '../constants/actionTypes'

const superagent = superagentPromise(_superagent, global.Promise);

//ReactGA.initialize('UA-119743168-1');

//const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    //if(req.url.startsWith("https://api.adya.io"))
    //    ReactGA.pageview(req.url);
    req.set('Content-Type', 'application/json');
    if (token) {
        req.set('authorization', `${token}`);
    }
}

const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
    current  : () =>
        requests.get('/common/user'),
    save: user =>
        requests.put('/common/user', { user })
};

export default { Auth, setToken: _token => { token = _token; } };
