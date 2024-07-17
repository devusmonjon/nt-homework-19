"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import { IPost } from "@/interfaces";

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto px-10 mt-10 text-white">
        {posts.map((post: IPost) => (
          <div
            key={post.id}
            className="w-full max-w-[1200px] mx-auto px-10 mt-10 text-white"
          >
            <div
              className="w-full max-w-[1200px] mx-auto px-10 mt-10 text-white"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <Link
                  href={`/posts/${post.id}`}
                  className="w-[150px] h-[50px] flex justify-center items-center py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                >
                  Read More
                </Link>
              </div>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page