import { Helmet } from 'react-helmet-async';

import { ListView } from 'src/sections/to-do-list';

// ----------------------------------------------------------------------

export default function ToDoList() {
  return (
    <>
      <Helmet>
        <title> ToDoList | Minimal UI </title>
      </Helmet>
      <ListView />
    </>
  );
}
