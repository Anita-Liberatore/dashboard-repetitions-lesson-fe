import {http} from 'http';

http.interceptor.push(() => {
    authentication: 'Bearer ' +sessionStorage.getItem('token') 
    }
  );