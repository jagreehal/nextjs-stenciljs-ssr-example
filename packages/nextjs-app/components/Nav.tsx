import React from "react";
import Link from "next/link";
export default () => (
  <div>
    <div>
      <Link href="/a">
        <a>a</a>
      </Link>
    </div>
    <div>
      <Link
        href={{
          pathname: "/b",
          query: { initialMessage: "Set By Query String" }
        }}
      >
        <a>b</a>
      </Link>
    </div>
  </div>
);
