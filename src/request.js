import axios from 'axios';
let name = '';
let height = -1;
export function getInfo(str, i) {
  return axios.get('https://swapi.dev/api/' + str + '/' + i).then(
    function (response) {
      return response;
    }
  ).catch(
    function (error) {
      console.log('Show error notification!')
    }
  )
}
//console.log(123); 