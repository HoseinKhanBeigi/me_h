import { http } from "../services/http";
import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const createAsyncAction = (url: string) => {
  //url as a type for first parameter of createAsyncThunk
  return createAsyncThunk(url, async ({ page }: any) => {
    const response: AxiosResponse<any, any> | void = await http.get(url, {
      params: {
        page,
        client_id: process.env.REACT_APP_LIENT_ID,
      },
    });
    const data = JSON.parse(JSON.stringify(response?.data));
    return data;
  });
};
