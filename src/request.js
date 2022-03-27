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
export {getAll, getSingle};
//console.log(123); 