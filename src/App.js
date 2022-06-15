import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Error from "./components/Error";
import Loading from "./components/Loading";
import MyMapComponent from "./components/MyMapComponent";
import AllMarkers from "./components/AllMarkers";
// import Marker from "./components/Marker";
// import data from "./data/Tooltipdata";


const render = (status) => {
  if (status === Status.FAILURE) return <Error />;
  return <Loading />;
};

function App() {
  return (
    <Wrapper apiKey="AIzaSyA9ZNsaoAQW1R8UlO8jaTb767HHNu80QJA" render={render}>
      <MyMapComponent center={{ lat: 0, lng: 0 }} zoom={2}>
        <AllMarkers />
      </MyMapComponent>
    </Wrapper>
  );
}

export default App;
