import React, { useContext } from "react";
import Content from "./Content";
import { HookUseContext } from "./ThemeContext";
function Post() {
  const content = useContext(HookUseContext);
  console.log(content);
  return (
    <div>
      <button onClick={content.changeStatus}>Toggle</button>
      <Content />
    </div>
  );
}

export default Post;
