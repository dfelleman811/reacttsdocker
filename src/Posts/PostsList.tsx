import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post";
import "./Posts.css";

export type Post = {
    id: number;
    title: string;
    body: string;
    userId?: number;
};

export default function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function getPosts() {
            try {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (res.status === 200) {
                    console.log(res.data);
                    setPosts((posts) => res.data);
                }
            } catch (err) {
                console.error(err);
            }
        }
        getPosts();
    }, []);

    return (
        <ul>
            {posts
                .filter((post) => post.id < 10)
                .map((post) => {
                    return (
                        <li key={post.id}>
                            <Post post={post} />
                        </li>
                    );
                })}
        </ul>
    );
}
