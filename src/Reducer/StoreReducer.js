export const types={
    saveTask: 'save - task'
}
const initialStore = {
    user: [{}],
    registered:{"nicolas@gmail.com":"nicolas@gmail.com"}

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
            return {...action};
    }
};
export {initialStore}
export default StoreReducer;