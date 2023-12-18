import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
