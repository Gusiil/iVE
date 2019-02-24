
export const getData = function(url,param,fn){
    axios.get(url + JSON.stringify(param))
    .then(function(data) {
        fn(data);
    });
}
export const postData = function(url,param,fn){
   axios.post(url, encodeURIComponent(JSON.stringify(param)))
    .then(function(data) {
        fn(data);
    });
}
export const putData = function(url,param,fn){
    axios.put(url,encodeURIComponent(JSON.stringify(param)))
     .then(function(data) {
         fn(data);
     });
 }


