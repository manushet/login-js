const login_url = 'login';

function addToken(req) {
  if (!req.url.includes(login_url)) {
    const token = localStorage.getItem("token");
	req.headers['Authorization'] = `Bearer ${token}`;
	}
	return req;
}

function setTokenOnLogin(res) {
	if (res.config.url.includes(login_url)) {
		const lsTokenKey = res.data.token;
		localStorage.setItem('token', lsTokenKey);
	}
	return res;
}

function getClearResponse(res) {
	return res.data;
}

function onError(err) {
	console.dir(err);
	return Promise.reject(err);
}

export default function (axios) {
	axios.interceptors.request.use(addToken);
	axios.interceptors.response.use(setTokenOnLogin);
	axios.interceptors.response.use(getClearResponse, onError);
}