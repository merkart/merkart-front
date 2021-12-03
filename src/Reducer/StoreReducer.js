export const types={
    saveTask: 'save - task'
}
const initialStore = {
    user: [{}],

};
const StoreReducer = (state, action) => {
    console.log(action,action.payload)
    switch (action.type) {
        case types.saveTask:
            console.log('entra savetask',action)
            return {
                ...action

            }
        default:
            return state;
    }
};
export {initialStore}
export default StoreReducer;