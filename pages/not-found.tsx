import Link from "next/link";
import * as React from "react";
//======================================
const NotFound = () => {
  //======================================return
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};
export default NotFound;
