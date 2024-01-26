import { type Post } from "./PostsList";

type PostProps = {
    post: Post;
};

export default function Post({ post }: PostProps) {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    );
}
