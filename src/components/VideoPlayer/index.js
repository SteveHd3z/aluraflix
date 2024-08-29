import ReactPlayer from "react-player";

const VideoPlayer = ({ link }) => (
    <>      
      <ReactPlayer 
      url={link} 
      controls
      playing={true}
      />
    </>
  );
  
  export default VideoPlayer;