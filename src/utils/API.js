import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?inc=id,picture,name,phone,email,dob&results=200&nat=us&seed=foobar";

export default {
  get: function () {
    return axios.get(BASEURL);
  },
};
