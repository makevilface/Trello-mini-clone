import { combineReducers } from 'redux';

import board from './board';
import listsById from './listsById';
import cardsById from './cardsById';

export default combineReducers({ board, listsById, cardsById });
