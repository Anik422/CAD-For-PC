const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

const initialState = {
    loading: false,
    videos: [],
    error: ''
};

// create async thank
const getFilterVideo = createAsyncThunk('filter/getVideos', async (thunkAPI) => {
    const response = await fetch(thunkAPI);
    return await response.json();
});

const videoFilterSlice = createSlice({
    name: 'videoFilter',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getFilterVideo.pending, (state) => {
            state.loading = true;
            state.error = '';
            state.videos = [];
        });
        builder.addCase(getFilterVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = [...action.payload].sort((a, b) => parseInt(b.views) - parseInt(a.views));;
            state.error = '';
        });
        builder.addCase(getFilterVideo.rejected, (state, action) => {
            state.loading = false;
            state.videos = [];
            state.error = action.error.message;
        });
    }
});

module.exports = videoFilterSlice;
module.exports.getFilterVideo = getFilterVideo;