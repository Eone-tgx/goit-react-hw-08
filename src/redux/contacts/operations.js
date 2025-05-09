import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return thunkAPI.rejectWithValue("No token");

      setAuthHeader(token);
      const { data } = await goitAPI.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return thunkAPI.rejectWithValue("No token");

      setAuthHeader(token);
      const { data } = await goitAPI.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return thunkAPI.rejectWithValue("No token");

      setAuthHeader(token);
      await goitAPI.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
