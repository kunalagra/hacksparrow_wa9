'use client'

import React, { useState } from "react";

const page = () => {

  const [title, setTitle] = useState('');
    const [individualPrice, setIndividualPrice] = useState('');
    const [groupPrice, setGroupPrice] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [domain, setDomain] = useState('');
    const [modules, setModules] = useState([]);

    const handleThumbnailChange = (e) => {
        setThumbnailImg(e.target.files[0]);
        console.log(e.target.files[0]);
        setThumbnailImg(URL.createObjectURL(e.target.files[0]));
    }

    const handleStartDateChange = (e) => {
        if (new Date(e.target.value) > new Date()) {
            setStartDate(e.target.value);
        }
    }

  return (
    <div className="bg-lightpink-1">
      <div className="flex min-h-full max-w-7xl items-center justify-center py-12 px-4 mx-auto">
        <div className="w-full max-w-3xl space-y-8 shadow-lg bg-white rounded-lg py-12 px-8">
          <div>
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              New Course Plan
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={() => {}}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                  placeholder="Domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  required
                  rows={5}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  resize-none"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="number"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                  placeholder="Individual Price (in ₹)"
                  value={individualPrice}
                  onChange={(e) => setIndividualPrice(e.target.value)}
                />
                <input
                  type="number"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                  placeholder="Group Price (in ₹)"
                  value={groupPrice}
                  onChange={(e) => setGroupPrice(e.target.value)}
                />
              </div>
              <div className="bg-white rounded-md border border-gray-300 px-3 py-2 text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 ">
                <p>Thumbnail</p>
                {thumbnailImg && (
                  <img
                    src={thumbnailImg}
                    alt={"thumbnail"}
                    className="w-full h-[200px] object-contain rounded-lg mt-3"
                  />
                )}
                <input
                  type="file"
                  onChange={handleThumbnailChange}
                  className="w-full mt-3"
                />
              </div>
              <div className="bg-white flex gap-4 items-center rounded-md border border-gray-300 px-3 py-2 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 ">
                <p className="text-gray-500">Start Date</p>
                <input
                  type="date"
                  onChange={handleStartDateChange}
                  value={startDate}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-1 py-2 px font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
