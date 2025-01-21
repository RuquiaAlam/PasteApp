import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPastes = () => {
  const { id } = useParams();
  console.log(id);

  const pastesArray = useSelector((state) => state.paste.pastes);

  const paste = pastesArray.find((p) => p._id === id);

  return (
    <div className="border">
      <div>{paste?.title}</div>
      <div>{paste?.content}</div>
    </div>
  );
};

export default ViewPastes;
