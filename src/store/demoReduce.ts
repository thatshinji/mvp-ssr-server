import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const api = '//127.0.0.1:3000'

const getDemoData = createAsyncThunk(
  'demo/getData',
  async (initData: string) => {
    const res = await axios.post(`${api}/api/getDemoData`, {
      content: 'iniData'
    })
    return res.data?.data.content
  }
)

const demoReducer = createSlice({
  name: 'demo',
  initialState: {
    content: 'default value'
  },
  reducers: {},
  extraReducers(build) {
    build.addCase(getDemoData.pending, (state, action) => {
      state.content = 'pending'
    })
      .addCase(getDemoData.fulfilled, (state, action) => {
        state.content = action.payload
      })
      .addCase(getDemoData.rejected, (state, action) => {
        state.content = 'rejected'
      })
  }
})

export {
  demoReducer,
  getDemoData
}