import axios from "axios";

const getAccessToken = async () => {
    try {
        const value = await localStorage.getItem('comipToken');
        if(value !== null) {
         return JSON.parse(value)
        }
      } catch(e) {
      return null
      }
}

const getConfig = async () => {
    const token = await getAccessToken();
    const config = {
      baseUrl: "http://localhost:4000",
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    }
    return config;
  };

  const base = async (param) => {
    const CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    const config = await getConfig();
  
    setTimeout(() => {
      source.cancel();
    }, 50000);
  
    return await axios({
      method: param.method,
      baseURL: config.baseUrl,
      url: param.url,
      headers: config.headers,
      cancelToken: source.token,
      data: param.data,
      withCredentials:true
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
        if (err.response) {
          return err.response;
        } else {
          return Promise.reject('TIMEOUT');
        }
      });
  };
  
  const request = async (method, url) => {
    return await base({method, url})
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err));
  };
  
  const requestData = async (method, url, data) => {
    return await base({method, url, data})
      .then(res => {
        console.log(res)
        return Promise.resolve(res)
      })
      .catch(err => Promise.reject(err));
    };
  
  const data = {
      request,
      requestData,
    };
    export default data