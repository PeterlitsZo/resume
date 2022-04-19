enum State {
    open = 'open',
    close = 'close',
    waitToClose = 'waitToClose',
    pin = 'pin',
    pinAndDrag = 'pinAndDrag',
    pinAndHover = 'pinAndHover',
};

export const needShow = (state: State) => {
    return state === State.open || state === State.pin || state === State.pinAndHover || state === State.pinAndDrag;
}

export const isPinned = (state: State) => {
    return state === State.pin || state === State.pinAndHover || state === State.pinAndDrag;
}

export const isActive = (state: State) => {
    return state === State.open || state === State.pinAndHover || state === State.pinAndDrag;
}

export default State;
