import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import * as request from "request";

const app = createApp(App);

app.use(router);

app.mount("#app");

/*request("https://swapi.dev/api/people/1", { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  console.log(body.url);
  console.log(body.explanation);
});
*/