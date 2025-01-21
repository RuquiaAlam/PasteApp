import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromPastes } from "../redux/pasteSlice";

const Pastes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const pastesArray = useSelector((state) => state.paste.pastes);
  const filteredArray = pastesArray.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (pasteId) => {
    dispatch(deleteFromPastes(pasteId));
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredArray.length > 0 &&
        filteredArray.map((paste) => {
          return (
            <div className="border" key={paste._id}>
              <div>{paste.title}</div>
              <div>{paste.content}</div>
              <div>
                <button>
                  <a href={`/?pasteId=${paste._id}`}>Edit</a>
                </button>
                <button>
                  <a href={`/viewPastes/${paste._id}`}>View</a>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content),
                      toast.success("copied successfully");
                  }}
                >
                  Copy
                </button>
                <button
                  onClick={() => {
                    navigator.share(paste?.content),
                      toast.success("shared successfully");
                  }}
                >
                  Share
                </button>
                <button onClick={() => handleDelete(paste._id)}>Delete</button>
              </div>
              <div>{paste.createdAt}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Pastes;
