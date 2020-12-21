import React from "react";
import queryString from "query-string";
const Posts = (props) => {
  const result = queryString.parse(props.location.search);
  console.log(result);
  console.log(queryString.parse(props.location.search));
  return (
    <div>
      <h1>Posts</h1>
      Year:{props.match.params.year} , Month:{props.match.params.month}
    </div>
  );
};

export default Posts;
