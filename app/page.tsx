import AboutCard from "@/components/AboutCard";
import ImageSlider from "@/components/slider/ImageSlider";
import React from "react";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLuH6DiUjKNpYZZ7h-dLCd1oGjugQcsHNT&key=${process.env.YOUTUBE_API_KEY}`
  );

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const Home = () => {
  // if (!data || !data.items) {
  //   return <div>No data available.</div>;
  // }

  // const videos = data.items;
  // console.log(videos)

  return (
    <div className="h-screen">
      {/* {videos.map(({ id, snippet = {} }) => {
        const { title, thumbnails = {}, resourceId = {} } = snippet;
        const { medium } = thumbnails;
        return (
          <li key={id}>
            <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
              <p>
                <img
                  width={medium.width}
                  height={medium.height}
                  src={medium.url}
                  alt=""
                />
              </p>
              <h3>{title}</h3>
            </a>
          </li>
        );
      })} */}
      <AboutCard />
      <ImageSlider />
      {/* <VideoCard /> */}
    </div>
  );
};

export default Home;
