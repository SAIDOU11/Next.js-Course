import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  console.log(params.slug.length);

  if (params.slug.length === 2) {
    return (
      <h1>
        Docs {params.slug[0]} and {params.slug[1]}{" "}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Docs {params.slug[0]}.</h1>;
  }
  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
};

export default Docs;
