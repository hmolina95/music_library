import { createStore } from 'redux';
import updateLibrary from './libraryReducer';

const store = createStore(updateLibrary);

export default store;