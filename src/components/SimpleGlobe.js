import Globe from "react-globe.gl";
import nightEarth from "../earth-night.jpeg";
import dayEarth from "../earth-day.jpeg";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SimpleGlobe = () => {
  const {height, width} = useWindowDimensions();
  return (
    <Globe
      width={width}
      height={height}
      globeImageUrl={nightEarth}
    />
  );
};
export default SimpleGlobe;
