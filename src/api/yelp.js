import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer gaoWpsM9RNjXLmQxeMyWRGWjtX-tIwopDU1PUbdqG0oiCzZTEONUwZ39A5H1LauoOnnm2UTCFnHc7YqHT9cYceIz1lVtuNKsSyIEGVi0WFblYj1mNPhLOdJwq-MfXnYx"
  }
});
