import { register, login, logout, refresh } from './operations';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleReject = (state, action) => {
  toast.error(action.payload);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: handleReject,

    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: handleReject,

    [logout.fulfilled](state) {
      state.isLoggedIn = false;
    },
    [login.rejected]: handleReject,

    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
