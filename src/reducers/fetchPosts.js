import axios from "axios";

const initialState = {
  data: [],
};

const fetchPostReducer = (state, action) => {
  if (typeof state === "undefined") return initialState;
  switch (action.type) {
    case "getPost":
      axios.get("http://localhost:9000/posts").then((res) => {
        return res.data.slice(2, res.data.length - 1);
      });
    default:
      return null;
  }
};

export default fetchPostReducer;
