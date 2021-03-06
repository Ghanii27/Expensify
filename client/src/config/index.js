const urls = new Map();
const websiteUrls = new Map();

urls.set("localhost", "http://localhost:9000");

urls.set(
  "expensify-react-client.herokuapp.com",
  "https://expensify-client-web-app.herokuapp.com"
);
websiteUrls.set("localhost", "http://localhost:3000");
websiteUrls.set(
  "expensify-react-client.herokuapp.com",
  "https://expensify-react-client.herokuapp.com"
);

export const baseUrl = urls.get(window.location.hostname);
export const websiteUrl = websiteUrls.get(window.location.hostname);
