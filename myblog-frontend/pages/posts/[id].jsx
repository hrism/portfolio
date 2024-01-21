import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Container from 'react-bootstrap/Container';

import PostNavigation from '../../components/PostNavigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`${apiUrl}/api/posts/${id}/`)
        .then(response => response.json())
        .then(data => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-4 overflow-x-hidden">
      <article className="py-4">
        <h1>{post.title}</h1>
        <p className="text-end">{new Date(post.published_date).toLocaleDateString()}</p>
        <hr/>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
      </article>
      <hr/>
      <section className="py-4">
        <PostNavigation post={post} />
      </section>
    </Container>
  );
};

export default PostPage;
