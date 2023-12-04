const store = require("./rtk/app/store");
const { getVideo } = require("./rtk/features/getVideos/getVideosSlice");
const {
  getFilterVideo,
} = require("./rtk/features/filterGetVideo/filterGetVideo");

// store.subscribe(() => {
//     console.log(store.getState());
// });

async function dispatchAll() {
  await store.dispatch(getVideo());
  const data = store.getState();
  var domain = "http://localhost:9000/videos?";
  data.videSlice.video.tags.forEach((tag) => {
    domain = domain + `tags_like=${tag}&`;
  });
  console.log(domain);
  await store.dispatch(
    getFilterVideo(
        domain[domain.length - 1] === "&"
        ? domain.slice(0, domain.length - 1)
        : domain
    )
  );
}

dispatchAll();

// store.dispatch(getVideo());
// console.log(store);
// store.dispatch(getFilterVideo(['title', 'description']));
// store.subscribe(() => {
//     if (store.getState().getVideoReducer.video !== {}) {
//         console.log(store.getState());
//     }
// });
