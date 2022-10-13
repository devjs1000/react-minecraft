import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import Player from "./components/Player";
import FirstPersonView from "./components/FirstPersonView";
import Cursor from "./components/Cursor";
import Cubes from "./components/Cubes";
import Selector from "./components/Selector";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FirstPersonView />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <Selector />
      <Cursor />
    </>
  );
}

export default App;
