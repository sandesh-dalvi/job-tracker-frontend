import axios from "axios";

import { clearStore } from "../features/user/userSlice";

const customFetch = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }

  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
