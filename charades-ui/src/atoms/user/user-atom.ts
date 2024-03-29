import { atom } from 'jotai';
import { User } from './user.types';

export const userAtom = atom<User>({
  username: '',
  uuid: null,
});
