import {atom} from 'recoil';

export const isAppInitializedState = atom<boolean>({
  key: 'isAppInitializedState',
  default: false,
});
