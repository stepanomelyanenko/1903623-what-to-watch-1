import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getError = (state: State): string | null => state[NameSpace.App].error;
