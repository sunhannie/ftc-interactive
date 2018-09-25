
function formToJson(formData) {
  const o = {};

  for (let [key, value] of formData) {
    console.log('Form Data:');
    console.log(`${key}: ${value}`);
    o[key] = value.trim();
  }
  return JSON.stringify(o);
}


function ajax(url, formData) {
//   const headers = new Headers({
//     "Accept": "application/json"
//   });
  const headers = { // 请求头（可以是Headers对象，也可是JSON对象）
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }

//   if (formData) {
//     headers.set('Content-Type', 'application/json');
//   }

  // const init = {
  //   method: formData ? 'POST' : 'GET',
  //   headers:headers,
  //   mode: 'same-origin',
  //   credentials: 'same-origin',
  //   redirect: 'error'
  // }
  const init = {
    method: formData ? 'POST' : 'GET',
    headers:headers,
    mode: 'cors',
    credentials: 'include',
    redirect: 'error'
  }

  if (formData) {
    init.body = formToJson(formData)
  }

  return fetch(url, init)
  .then(res => {
    if (res.status !== 200) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(json => {
    if (json.error) {
      return Promise.reject(`API Error: ${json.message}`);
    }
    return json;
  }); 
}

export default ajax;


// http://www.ftchinese.com/index.php/jsapi/paywall
// const init = {
//     method: 'GET',
//     headers : { // 请求头（可以是Headers对象，也可是JSON对象）
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     mode: 'same-origin',
//     credentials: 'same-origin',
//     redirect: 'error'
// }
// const fetchPosts =  () => {
// return fetch('http://localhost:9000/memberData',init)
// .then(response => response.json())
// .then(json => {
// if (json.error) {
//     return Promise.reject(`API Error: ${json.message}`);
// }
//     return json;
// });
// }

// let div = undefined;
// fetchPosts().then(data => {
//     return Promise.resolve(data);
// }).then(data => {
//     newData = Object.assign({}, data);
//     aClone = data;
//     console.log(aClone);
// }).catch(e => {
//     console.log(e);
//     alert(`Error: ${e}`);
// });
// console.log(newData);