"use client";
import { useSearchParams } from "next/navigation"

const Page = ({id}: {id: number}) => {
    const searchParams = useSearchParams();

  const query = searchParams.get('q');

  return (
    <div>{id}</div>
  )
}

export default Page