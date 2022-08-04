import React, { useContext } from "react";
import { HookUseContext } from "./ThemeContext";
function Paragraph() {
  const content = useContext(HookUseContext);
  console.log(content);
  return (
    <div className={content.theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora
      sed ipsa obcaecati expedita, praesentium pariatur veritatis delectus, enim
      repellendus modi doloremque nemo voluptatibus eos consequatur autem
      commodi labore aperiam.
    </div>
  );
}

export default Paragraph;
