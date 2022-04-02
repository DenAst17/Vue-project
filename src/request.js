import axios from 'axios';

async function getAll(url) {
      return axios.get(url).then(
        function (response) {
          return response;
        }
      ).catch(
        function (error) {
          console.log('Error 404! Please, check the link')
        }
      )
}
async function getSingle(url, field) {
      return axios.get(url + "/" + field).then(
        function (response) {
          return response;
        }
      ).catch(
        function (error) {
          console.log('Error 404! Please, check the link')
        }
      )
    }
function deleteSingle(url, id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios.delete(url + "/" + id).then(resolve).catch(reject); // response => resolve(response) / error => reject(error) alternative
    }, 1000);
  })
}
async function postSingle(url, info){
  return await axios.post(url, info);
}
async function updateSingle(url, id, info){
  return await axios.put(url + "/" + id, info);
}
export {getAll, getSingle, deleteSingle, postSingle, updateSingle};
//console.log(123); 