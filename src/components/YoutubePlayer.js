import YouTube from "react-youtube";

const YoutubePlayer = ({id}) => {
  const opts = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
    },
  };

  const _onReady = (e) => {
    e.target.playVideo();
    e.target.setVolume(0)
  };
  return (
      <div className="pointer-events-none">
        <YouTube
          className="w-screen h-screen absolute top-0 left-0"
          allowfullscreen="1"
          videoId={id}
          opts={opts}
          onReady={_onReady}
        />
      </div>
  );
};
export default YoutubePlayer;
