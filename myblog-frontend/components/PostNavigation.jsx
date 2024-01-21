// components/PostNavigation.js

import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';

const PostNavigation = ({ post }) => {
    return (
        <ListGroup horizontal className="justify-content-center">
            {post.previous_post_id && (
                <Link href={`/posts/${post.previous_post_id}`} passHref className="text-decoration-none">
                    <ListGroup.Item action className="d-flex align-items-center py-3"><ChevronLeft/><p className="lh-1 mb-0">前の記事へ</p></ListGroup.Item>
                </Link>
            )}
            <Link href="/posts" passHref className="text-decoration-none">
                <ListGroup.Item action className="py-3"><p className="lh-1 mb-0">一覧へ</p></ListGroup.Item>
            </Link>
            {post.next_post_id && (
                <Link href={`/posts/${post.next_post_id}`} passHref className="text-decoration-none">
                    <ListGroup.Item action className="d-flex align-items-center py-3"><p className="lh-1 mb-0">次の記事へ</p> <ChevronRight /></ListGroup.Item>
                </Link>
            )}
        </ListGroup>
    );
};


export default PostNavigation;
