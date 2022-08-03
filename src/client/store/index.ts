import create from 'zustand';
import { IUser } from '../lib/types';

type Store = {
  authUser: IUser | null;
  uploadingImage: boolean;
  pageLoading: boolean;
  setAuthUser: (user: IUser) => void;
  setUploadingImage: (isUploading: boolean) => void;
  setPageLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  uploadingImage: false,
  pageLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setUploadingImage: (isUploading) =>
    set((state) => ({ ...state, uploadingImage: isUploading })),
  setPageLoading: (isLoading) =>
    set((state) => ({ ...state, pageLoading: isLoading })),
}));

export default useStore;
