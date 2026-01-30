import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";

//get all jobs
export const getAllJobsThunk = async (params, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } = params;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//get stats
export const showStatsThunk = async (_, thunkAPI) => {
  let url = `/jobs/stats`;

  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    // console.log(resp.data);

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
