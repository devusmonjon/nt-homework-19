"use client";
import { IData, IPost } from "@/interfaces";
import { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";

const Page = ({params}: {params: {post: number}}) => {
  const [post, setPost] = useState<IPost>({
    userId: 0,
    id: 0,
    title: "Loading. . .",
    body: "Loading. . .",
  });

  const [users, setUsers] = useState<IData[]>([]);
  const [comments, setComments] = useState<{postId: number; id: number;name:string;email:string;body:string}[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
      .then((response) => response.json())
      .then((json) => setPost(json));

      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [post]);

  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto px-10 mt-10 text-white">
        <div className="w-full rounded-xl border-[2px] border-solid border-[#fff] p-10">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg font-light"> {post.body}</p>
          <div>
            <div className="flex items-center mt-10 gap-2">
            <MdAccountCircle size={30} />
            <h1 className="font-bold">{users.find((user) => user.id === post.userId)?.name}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-10">Comments:</h1>
        {comments.map((comment) => (
          <div className="w-full rounded-xl border-[2px] border-solid border-[#fff] p-4 mt-10" key={comment.id}>
          <h1 className="text-xl font-bold mb-4">{comment.name}</h1>
          <p className="text-md font-light"> {comment.body}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Page