import { Helmet } from 'react-helmet-async';

import { PostView } from 'src/sections/posts/post-view'; 

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> POST | Minimal UI </title>
      </Helmet>

      <PostView />
    </>
  );
}
