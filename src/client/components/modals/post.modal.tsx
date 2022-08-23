import ReactDom from 'react-dom';
import React, { FC } from 'react';

type IPostModal = {
  openPostModal: boolean;
  setOpenPostModal: (openPostModal: boolean) => void;
  children: React.ReactNode;
};

const PostModal: FC<IPostModal> = ({
  openPostModal,
  setOpenPostModal,
  children,
}) => {
  if (!openPostModal) return null;
  return ReactDom.createPortal(
    <>
      <div
        className='fixed inset-0 bg-[rgba(0,0,0,.5)] z-[1000]'
        onClick={() => setOpenPostModal(false)}
      ></div>
      <div className='max-w-lg w-full rounded-md fixed top-0 left-1/2 -translate-x-1/2 bg-white z-[1001] p-6'>
        {children}
      </div>
    </>,
    document.getElementById('post-modal') as HTMLElement
  );
};

export default PostModal;
