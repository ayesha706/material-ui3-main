import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useDarkMode } from './context/DarkModeContext'

export default function gallery() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    
      <div className={` ${isDarkMode ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-black'}`}>
        <button onClick={toggleDarkMode}>Change theme</button>
        <Carousel responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}>
          {/* item 1 */}
          <div>
            <div className='flex justify-center'>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 m-20 mt-10 w-[60%] items-baseline">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div>
            <div className='flex justify-center' >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 m-20 mt-10 w-[60%] items-baseline">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div>
            <div className='flex justify-center' >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 m-20 mt-10 w-[60%] items-baseline">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg  "
                      src="https://docs.material-tailwind.com/img/team-3.jpg"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg  "
                      src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                      alt="gallery"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
  )
}
