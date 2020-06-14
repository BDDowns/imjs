// todo create an image object with image prototype methods such as metadata manipulation
// image metadata should probably be stored in a database -- mongo / sqlite
class image {
  url = "";
  size = "mb";
  height = "";
  width = "";
  comments = [];
  nsfw = false;
  thumbnail = {
    url: "",
    size: "",
    height: "",
    width: ""
  };
}