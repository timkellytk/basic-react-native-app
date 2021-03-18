import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer CE1yCr2k7u6WuHIo_-z-jxGm73YsBXT-vt_eFLuuxgOoQu9IdUb-LB4USKxnHQpRZSbN3w87VodF22uULDAeT2hzAXCpQrARZ7fukqIJSn4AznlXuKwF3NoRNOVKYHYx",
  },
});
