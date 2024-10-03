import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Write = () => {
  const { id } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [image, setImage] = useState(null); 
  const [send, setSend] = useState(false);
  const [categories, setCategories] = useState({
    art: false,
    science: false,
    cinema: false,
    technology: false,
    food: false,
    design: false,
  });

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:3009/posts/${id}`);
      if (res.ok) {
        const post = await res.json();
        setTitle(post.title);
        setDescription(post.description);
        setLongDescription(post.longDescription);
        setImage(post.imgUrl);
        const updatedCategories = { ...categories };
        post.categories.forEach((category) => {
          updatedCategories[category] = true;
        });
        setCategories(updatedCategories);
      }
    } catch (error) {
      console.log('Error fetching post:', error);
    }
  };

  const uploadImage = async (imageFile) => {
    setSend(true);
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'ibdactti');

    const res = await fetch('https://api.cloudinary.com/v1_1/drl0jragb/image/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return data.secure_url;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let imgURL;
    if (image && typeof image !== 'string') {
      imgURL = await uploadImage(image);
    }
    const articleData = {
      title,
      description,
      longDescription,
      imgUrl: imgURL || null,
      categories: Object.keys(categories).filter((category) => categories[category]),
    };

    const method = id ? 'PUT' : 'POST';
    const res = await fetch(`http://localhost:3009/posts${id ? `/${id}` : ''}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    });

    if (res.ok) {
      setSend(false);
      setSuccessMessage('successfully');
      resetForm();
    } else {
      setSuccessMessage('error');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setLongDescription('');
    setImage(null);
    setCategories({
      art: false,
      science: false,
      cinema: false,
      technology: false,
      food: false,
      design: false,
    });
  };

  return (
    <main className="min-h-[85vh] w-full my-5 flex justify-center items-center">
      {successMessage && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#00000047]">
          <div className="flex flex-col items-center gap-4 w-[300px] border-[1px] border-gray-200 rounded-xl shadow-lg text-center bg-white p-4">
            {successMessage === 'successfully' ? (
              <>
                <i className="fa-solid fa-circle-check" style={{ color: 'green', fontSize: '40px' }}></i>
                <p className="text-gray-400 text-lg">Article submitted successfully!</p>
              </>
            ) : (
              <>
                <i className="fa-solid fa-circle-xmark" style={{ color: 'red', fontSize: '40px' }}></i>
                <p className="text-gray-400 text-lg">Error submitting article. </p>
              </>
            )}
            <button
              className={`bg-green-700 w-full p-1 rounded-lg font-bold text-white ${successMessage === 'successfully' ? 'bg-green-700' : ' bg-red-600'}`}
              onClick={() => setSuccessMessage('')}
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {send && (
        <div className='fixed top-0 right-0 w-screen h-screen flex justify-center items-center bg-[#00000033] z-[99999]'>
          <div className='w-12 h-12 border-4 border-t-transparent border-[#207a71] rounded-full animate-spin'></div>
        </div>
      )}

      <div className="flex-[1]">
        <h1 className="text-4xl my-4 font-bold uppercase text-[#207a71]">Write your article</h1>
        <form className="flex gap-4 max-sm:flex-col" onSubmit={submitHandler}>
          <div className="flex flex-col flex-[3] gap-4">
            <input
              maxLength={50}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              title="title"
              className="w-full p-2 border-[1px] border-gray-300 rounded-md focus-visible:outline-[#207a71] caret-[#207a71]"
              name="title"
              required
            />
            <textarea
              value={description}
              maxLength={195}
              name="description"
              className="border-[1px] border-gray-300 h-[103px] resize-none rounded-md p-2 focus-visible:outline-[#207a71] caret-[#207a71] max-sm:h-[200px]"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <textarea
              value={longDescription}
              name="longDescription"
              className="border-[1px] border-gray-300 h-[285px] resize-none rounded-md p-2 focus-visible:outline-[#207a71] caret-[#207a71] max-sm:h-[200px]"
              placeholder="Long Description"
              onChange={(e) => setLongDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex-[2]">
            <div className="flex flex-col gap-2 p-2 border-[1px] border-gray-300 rounded-md">
              <h3 className="text-lg font-bold">Publish</h3>
              <p className="text-md font-bold">
                Status: <span className="text-gray-300">Draft</span>
              </p>
              <p className="text-md font-bold">
                Visibility: <span className="text-gray-300">Public</span>
              </p>
              <label
                htmlFor="file"
                className="cursor-pointer inline-block py-2 px-4 font-bold bg-[#207a71] text-white text-center rounded-md"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="file"
                name="image"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && typeof image === 'string' && (
                <img src={image} alt="Uploaded" className="mt-2" />
              )}
            </div>

            <div className="mt-4 border-gray-300 border-[1px] p-2 rounded-md">
              <h3 className="text-lg font-bold">Category</h3>
              {Object.keys(categories).map((category) => (
                <div className="flex items-center gap-2 mt-2" key={category}>
                  <input
                    type="checkbox"
                    checked={categories[category]}
                    onChange={() => setCategories((prev) => ({ ...prev, [category]: !prev[category] }))}
                    name={category}
                    id={category}
                    className="form-checkbox h-6 w-6 text-[#207A71] accent-[#207A71]"
                  />
                  <label htmlFor={category} className="cursor-pointer">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}
              <input
                type="submit"
                className="mt-2 w-full border-[1px] p-2 text-[#207a71] border-[#207a71] cursor-pointer hover:bg-[#207a71] hover:text-white hover:font-bold duration-300"
                value="Send"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Write;
