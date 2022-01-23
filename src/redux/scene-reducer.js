export let initialStateScene = {
    boltsState: false,
    topState: false,
    hover: true
};

const sceneReducer = (state = initialStateScene, action) => {

    if (action.type === 'ADD-BOLTS-STATE') {
        return {...state, boltsState: action.state}
    }
    return state;
}

export const BoltsAddState = (value) => {
    return {type: 'ADD-BOLTS-STATE', state: value}
}


export default sceneReducer;