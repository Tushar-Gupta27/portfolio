const axios = require("axios");

const api1 = "https://socialmedia-api-14uj.onrender.com/posts";
const api2 =
  "https://chat-api-nrbn.onrender.com/conversation/629a63c91239d96124da2e11";

async function request() {
  let res1 = await axios.get(api1);
  let res2 = await axios.get(api2);
  console.log(res1, res2);
  return { res1, res2 };
}

function start() {
  setInterval(() => {
    request();
  }, 120000);
}

start();
