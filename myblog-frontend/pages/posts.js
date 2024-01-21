import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/posts/`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Container className="py-4">
      <h1>個人的なブログ</h1>
      <ul className="py-4">
        {posts.map(post => (
          <li key={post.id} className="my-3">
            <Link href={`/posts/${post.id}`} className="fw-bold">
            {post.title}
            </Link>
            - <small>{new Date(post.published_date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
      <Link href="/">トップに戻る</Link>
    </Container>
  );
};

export default PostsPage;
