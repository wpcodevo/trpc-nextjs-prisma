import Spinner from './Spinner';

const FullScreenLoader = () => {
  return (
    <div className='w-screen h-screen fixed'>
      <div className='absolute top-64 left-1/2 -translate-x-1/2'>
        <Spinner width={8} height={8} />
      </div>
    </div>
  );
};

export default FullScreenLoader;
