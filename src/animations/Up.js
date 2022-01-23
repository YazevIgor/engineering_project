import {initialStateScene} from "../redux/scene-reducer";
let reverse = true;
let hover = false;
let height = 0;
export function Up(ref, value, hover2) {
    hover = hover2
    if (hover) {
        if (reverse) {
            ref.current.position.y += 3;
            height = height + 3
            console.log(height)
            if (height > value) {
                hover =  false
                reverse = false
                initialStateScene.hover = false
            }
        } else {
            height =height - 3
            ref.current.position.y -= 3;

            if (height === 0) {

                initialStateScene.hover = false
                hover = false
                reverse = true
            }
        }
    }
}
