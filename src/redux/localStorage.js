export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('jobportal:state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('jobportal:state', serializedState);
    } catch (err) {
        console.log('Error while saving state', err);
    }
};