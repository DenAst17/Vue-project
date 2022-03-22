import axios from 'axios';
let name = '';
let height = -1;
export function getInfo(str){
  let ar = []; 
  return new Promise((resolve, reject) => {
    for(let i = 1; i <= 100; i++)
    {
      axios.get('https://swapi.dev/api/' + str + '/' + i)
      .then(response => {
        name = response.data.name;
        if(str == 'people')
          height = response.data.height;
        else if(str == 'planets')
          height = response.data.diameter;
        else
          height = response.data.length;
        ar.push([name, height]);
        console.log([name, height]); 
      })
      .catch(error => {
        height = -1;
      });
    }
    setTimeout(() => resolve(ar), 5000);
  });
}
console.log(123); 