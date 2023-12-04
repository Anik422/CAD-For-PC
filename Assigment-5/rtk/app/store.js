const configureStore = require("@reduxjs/toolkit").configureStore;
const videSlice = require("../features/getVideos/getVideosSlice");
const videoFilterSlice = require("../features/filterGetVideo/filterGetVideo");
const { createLogger } = require("redux-logger");

const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    videSlice: videSlice.reducer,
    videoFilterSlice: videoFilterSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;