/**
 * State:
 * 
 * - [0] `close`: The `Overbox` is closed. (mouse enter -> [1])
 * - [1] `open`: The `Overbox` is opened. (mouse leave -> [2], click `Overbox`'s
 *   bar -> [3])
 * - [2] `waitToClose`: The `Overbox` is ready to close. (later -> [0], mouse
 *   enter -> [1])
 * - [3] `pinAndDrag`: The `Overbox` is pinned and is draging. (end of draging
 *   (mouse up) -> [4])
 * - [4] `pinAndHover`: The `Overbox` is pinned and is hovering. (mouse leave ->
 *   [5], click the close button -> [0])
 * - [5] `pin`: The `Overbox` is pinned. (mouse enter -> [4])
 */
enum State {
    /** opened. */
    open = 'open',
    /** closed. */
    close = 'close',
    /** Wait to ease-out. */
    waitToClose = 'waitToClose',
    /** pinned. */
    pin = 'pin',
    /** pinned and is draging. */
    pinAndDrag = 'pinAndDrag',
    /** pinned and is hovering. */
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
