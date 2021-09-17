import Navbar from './Navbar';
import AbsuloteTop from './AbsuloteTop';
import AbsuloteBottom from './AbsuloteBottom';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen dark:bg-gray-900 bg-gray-50 flex'>
      <Navbar />
      <div className='relative w-full z-10'>
        <AbsuloteTop />
        <>{children}</>
        <AbsuloteBottom />
      </div>
    </div>
  );
};

export default Layout;
