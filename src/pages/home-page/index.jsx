import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../../components/loader/index.jsx';
import Island from '../../models/Island.jsx';
import { mirIslandForScreenSize } from '../../utils/index.js';

const Home = () => {
  const [islandScale, islandPosition, islandRotation] =
    mirIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div
        className="absolute
                   top-28
                   left-0
                   right-0
                   z-10
                   flex
                   items-center
                   justify-center"
      >
        popup
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
