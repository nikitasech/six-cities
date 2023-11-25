import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/store';
import { useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
