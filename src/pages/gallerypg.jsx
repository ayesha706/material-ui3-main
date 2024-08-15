import { Helmet } from 'react-helmet-async';

import { GalleryView } from 'src/sections/gallery';

// ----------------------------------------------------------------------

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title> Gallery | Minimal UI </title>
      </Helmet>
      <GalleryView />
    </>
  );
}
