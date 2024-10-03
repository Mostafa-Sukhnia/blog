import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(category);
        const res = await fetch('http://localhost:3009/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  const filteredPosts = posts.filter(item =>
    item.categories && item.categories.includes(category)
  );

  return (
    <main className='my-10 min-h-[90vh]'>
      <div className='flex flex-col gap-[160px] mt-10 h-full'>
        {category ? (
          filteredPosts.length > 0 ? (
            filteredPosts.map((item, index) => (
              <div
                key={index}
                className={`flex gap-10 ${index % 2 === 0 ? 'flex-row-reverse' : ''} max-md:flex-col`}
              >``
                {item.imgUrl && (
                  <div className='flex-[1] max-w-[400px] h-[300px] relative max-md:max-w-full max-md:h-[400px]'>
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className='w-full relative z-[999] h-full object-cover rounded-lg shadow-lg max-md:w-full max-md:h-[400px]'
                    />
                    <div className="absolute top-[20px] -left-[20px] w-full h-full bg-[#000] rounded-lg max-md:hidden"></div>
                  </div>
                )}
                <div className='flex-[2] flex flex-col justify-between'>
                  <Link to={`/${item.id}`} className='text-4xl font-bold flex items-center gap-6'>
                    {item.title}
                  </Link>
                  <div className='mt-2 text-2xl leading-10'>{item.description}</div>
                  <div className='flex gap-5 items-end'>
                    <Link to={`/${item.id}`}>
                      <button className='mt-4 px-4 py-2 bg-[#207a71] text-white rounded'>
                        Read more
                      </button>
                    </Link>
                    <div className='mt-2 text-gray-400'>The author: {item.kateb || 'unknown'}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='h-full w-full flex flex-col justify-center items-center'>
              <Link to="/" className='mt-2'>
                <i className="fa-regular fa-face-sad-tear" style={{ fontSize: '55px', color: 'red' }}></i>
                <p className='text-2xl font-bold mt-8 text-red-600 text-center'>Sorry, there are no articles about {category}!</p>
              </Link>
            </div>
          )
        ) : (
          posts.length > 0 ? (
            posts.map((item, index) => (
              <div
                key={index}
                className={`flex gap-10 ${index % 2 === 0 ? 'flex-row-reverse' : ''} max-md:flex-col`}
              >
                {item.imgUrl && (
                  <div className='flex-[1] max-w-[400px] h-[300px] relative max-md:max-w-full max-md:h-[400px]'>
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className='w-full relative z-[999] h-full object-cover rounded-lg shadow-lg max-md:w-full max-md:h-[400px]'
                    />
                    <div className="absolute top-[20px] -left-[20px] w-full h-full bg-[#000] rounded-lg max-md:hidden"></div>
                  </div>
                )}
                <div className='flex-[2] flex flex-col justify-between'>
                  <Link to={`/${item.id}`} className='text-4xl font-bold flex items-center gap-6'>
                    {item.title}
                  </Link>
                  <div className='mt-2 text-2xl leading-10'>{item.description}</div>
                  <div className='flex gap-5 items-end'>
                    <Link to={`/${item.id}`}>
                      <button className='mt-4 px-4 py-2 bg-[#207a71] text-white rounded'>
                        Read more
                      </button>
                    </Link>
                    <div className='mt-2 text-gray-400'>The author: {item.kateb || 'unknown'}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='h-full w-full flex flex-col justify-center items-center'>
                <i className="fa-regular fa-face-sad-tear" style={{ fontSize: '55px', color: 'red' }}></i>
                <p className='text-2xl font-bold mt-8 text-[#207a71] text-center'>Sorry, there are no articles!</p>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default Index;
