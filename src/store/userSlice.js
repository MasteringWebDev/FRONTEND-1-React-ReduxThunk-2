import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const USERS_API = 'https://reqres.in/api/users'
export const fetchUsers = createAsyncThunk('user/fetchUsers', async (_, thunkAPI) => {
  try {
    const res = await axios.get(USERS_API)
    return res.data.data
  } catch (error) {
    thunkAPI.rejectWithValue('Could not fetch users')
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    users: [],
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) =>  {
        state.loading = false,
        state.error = action.payload
      })
  }
})

export default userSlice.reducer