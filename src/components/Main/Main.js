
import Model from "../../model/Scene";
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function Main() {
    return (
       <Canvas>
           <OrbitControls/>
           <color attach="background" args={["lightblue"]} />
           <hemisphereLight intensity={0.35}/>
           <spotLight position={[10, 10, 10]}
                      angle={0.3}
                      penumbra={1}
                      intensity={2}/>
           <Suspense fallback={null}>
               <Model/>
           </Suspense>
       </Canvas>


    );
}

export default Main;
