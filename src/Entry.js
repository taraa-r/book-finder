import { useState } from "react";

export default function Entry({ action, placeholder }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter Book Title"
      />
    </form>
  );
}
