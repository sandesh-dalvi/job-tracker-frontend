import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";

export const createJobThunk = async (jobSlice, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", jobSlice, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//delete job
export const delteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());

    return resp.data.msg;
  } catch (error) {
    // console.log(error);
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//edit job
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
