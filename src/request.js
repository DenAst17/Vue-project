import axios from 'axios';
let people_ar = [];
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

for(let i = 1; i < 10; i++)
{
  axios.get('https://swapi.dev/api/people/' + i)
  .then(response => {
    name = response.data.name;
    height = response.data.height;
    people_ar.push({name, height});
  })
  .catch(error => {
    height = -1;
  });
}
export{people_ar};
console.log(people_ar);
console.log(123);