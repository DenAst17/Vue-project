import axios from 'axios';
let name = '';
let height = -1;
export function getInfo(str){
  let people_ar = []; 
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
        people_ar.push([name, height]);
      })
      .catch(error => {
        height = -1;
      });
    }
    setTimeout(() => resolve(people_ar), 5000);
  });
}
console.log(123); 