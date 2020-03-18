import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialData from '../initialData';


const data = {
    task: initialData
};

export default function configureStore(initialState = data) {
    return createStore(
        rootReducer,
        initialState,
        window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    );
};