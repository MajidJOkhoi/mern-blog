import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isNewUser: false,
};

export const signUp = createAsyncThunk('auth/signUp', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data.message);
  }
});

export const signIn = createAsyncThunk('auth/signIn', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signin', formData);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data.message);
  }
});

export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async ({ name, email, photoURL }, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/google', { name, email, photoURL });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.isNewUser = payload.isNewUser; // Assuming backend response includes isNewUser flag
      })
      .addCase(signInWithGoogle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
