import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [addedPosts, setAddedPosts] = useState([]);
  const [ID,setID] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3009/posts');
        const data = await res.json();
        const foundPost = data.filter((item=> item.id === id ))
        setPost(...foundPost);
        setAddedPosts(data.filter((_, index) => index !== Number(id)));
        setID(id)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3009/posts/${ID}`, {
        method: 'DELETE',
      });
      navigate('/');
    } catch (error) {
      console.log('Error deleting post:', error);
    }
  };



  if (!post) {
    return <p className='h-[90vh]'>Loading...</p>;
  }

  return (
    <main className='flex gap-12 my-10 max-lg:flex-col'>
      <div className='flex-1 bg-gray-100 p-6 rounded-lg shadow-lg'>
        <div>
          <img 
            src={post.imgUrl} 
            alt={post.title} 
            className='object-cover w-full h-[450px] rounded-lg' 
          />
          <div className='p-4'>
            <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
            <p className='text-lg text-gray-600'>{post.longDescription}</p>
          </div>
        </div>
        <div className='flex justify-between items-center px-4 mt-4'>
          <h1 className='text-lg font-semibold'>{post.kateb}</h1>
          <div className='flex gap-6 text-2xl items-center'>
            <Link to={`/write/${ID}`}>
              <i className="fa-solid fa-pen-to-square text-gray-600 hover:text-blue-400 duration-500"></i>
            </Link>
            <i 
              className="fa-solid fa-trash-can text-gray-600 hover:text-red-600 cursor-pointer duration-500"
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
      <div className='flex-[0.5] flex flex-col gap-8'>
        {
          addedPosts.slice(0, 2).map((item, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img 
              src={item.imgUrl} 
              alt={item.title} 
              className='w-full h-[200px] object-cover rounded-t-lg' 
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{item.title}</h2>
              <Link to={`/post/${index}`}>
                <button className='mt-4 px-4 py-2 bg-[#207A71] text-white rounded'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Single;
