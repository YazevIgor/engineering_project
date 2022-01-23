import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Top from "../../models/Top";

import Bolt from "../../models/Bolt";
import {Lights} from "../Three/Lights";
import Body from "../../models/Body";
import Val1 from "../../models/Val1";
import Val2 from "../../models/Val2";
import Val3 from "../../models/Val3";
import WheelSV1 from "../../models/WheelSV1";
import WheelSV2 from "../../models/WheelSV2";
import WheelSmall from "../../models/WheelSmall";
import WheelBig from "../../models/WheelBig";

function Main(props) {
    return (
       <Canvas camera={{position: [80, 60, 80]}} shadows={true} >
           <OrbitControls/>
           <color attach="background" args={['#E0FFFF']} />
           <Lights/>
           <Suspense fallback={'load'}>
               <Top position={[34.9,30,98.55]} scale={0.1} rotation={[0,3.14,0]}/>
               <Body scale={0.1}/>
               <Bolt  position={[0,0,0]} scale={0.1} rotation={[0,0,-1.6]}/>
               <Val1 scale={0.1} rotation={[0,3.14,0]} position={[35,42,74.5]}/>
               <Val2 scale={0.1} rotation={[0,3.14,0]} position={[39,30,36.5]}/>
               <Val3 scale={0.1} rotation={[0,3.14,0]} position={[57.5,35,11.5]}/>
               <WheelSV1 scale={0.1} rotation={[0,1.56,0]} position={[13,30,36.5]}/>
               <WheelSV2 scale={0.1} rotation={[0,1.56,0]} position={[24,30,36.5]}/>
               <WheelSmall scale={0.1} rotation={[0,1.56,0]} position={[24,30,16]}/>
               <WheelBig scale={0.1} rotation={[0,1.56,0]} position={[12,30,66.5]}/>
           </Suspense>
       </Canvas>
    );
}

export default Main;
