import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const pasteArray = useSelector((state) => state.paste.pastes);
  function createPaste() {
    const paste = {
      title: title,
      content: content,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setContent("");
    setSearchParams({});
  }
  useEffect(() => {
    if (pasteId) {
      const paste = pasteArray.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setContent(paste.content);
    }
  }, [pasteId]);
  return (
    <div>
      <div className="flex mt-5 gap-5">
        <input
          type="text"
          className="w-[400px] rounded-2xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="rounded-2xl" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div className="mt-5 ">
        <textarea
          className="min-w-[600px]"
          value={content}
          rows={20}
          onChange={(e) => setContent(e.target.value)}
        >
          {content}
        </textarea>
      </div>
    </div>
  );
};

export default Home;
