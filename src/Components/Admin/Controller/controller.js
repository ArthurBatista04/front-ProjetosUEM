import Swal from 'sweetalert2';
import loopbackClient from 'react-admin-loopback';
import PathName from '../../pathConst';
const fetchJson = async (url, options = {}) => {
  const requestHeaders =
    options.headers ||
    new Headers({
      Accept: 'application/json'
    });
  if (
    !requestHeaders.has('Content-Type') &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders.set('Content-Type', 'application/json');
  }
  if (options.user && options.user.authenticated && options.user.token) {
    requestHeaders.set('Authorization', options.user.token);
  }
  const response = await fetch(url, { ...options, headers: requestHeaders });
  const text = await response.text();
  const o = {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text
  };
  let status = o.status,
    headers = o.headers,
    body = o.body;
  let json;
  try {
    json = JSON.parse(body);
  } catch (e) {
    // not json, no big deal
  }
  if (status < 200 || status >= 300) {
    if (typeof json.error.message !== 'object') {
      Swal.fire({
        type: 'error',
        title: 'Ops! algo deu errado',
        text: json.error.message
      });
    } else {
      let texto = json.error.message.map(e => e.message);
      Swal.fire({
        type: 'error',
        title: 'Ops! algo deu errado',
        text: texto
      });
    }
  }
  return Promise.resolve({
    status: status,
    headers: headers,
    body: body,
    json: json
  });
};
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('access_token');
  options.headers.set('Authorization', token);
  return fetchJson(url, options);
};

export default loopbackClient(`${PathName}/api`, httpClient);
