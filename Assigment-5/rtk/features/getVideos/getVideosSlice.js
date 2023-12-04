const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const store = require("../../app/store");
const { getFilterVideo } = require("../filterGetVideo/filterGetVideo");
const fetch = require("node-fetch");

initialState = {
  loading: false,
  video: {},
  error: "",
};

// create async thank
const getVideo = createAsyncThunk("videos/get", async (thunkAPI) => {
  const response = await fetch("http://localhost:9000/videos");
  return await response.json();
});

const videSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVideo.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.video = {};
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
      state.error = "";
    });
    builder.addCase(getVideo.rejected, (state, action) => {
      state.loading = false;
      state.video = {};
      state.error = action.error.message;
    });
  },
});

module.exports = videSlice;
module.exports.getVideo = getVideo;
