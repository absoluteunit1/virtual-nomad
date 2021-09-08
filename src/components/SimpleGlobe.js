import Globe from "react-globe.gl";
import useWindowDimensions from "../hooks/useWindowDimensions";

const SimpleGlobe = () => {
  const {height, width} = useWindowDimensions();

  return (
    <Globe
      width={width}
      height={height}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    />
  );
};
export default SimpleGlobe;
