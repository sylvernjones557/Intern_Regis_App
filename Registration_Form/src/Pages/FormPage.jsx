import React from "react";
import { useParams } from "react-router-dom";
import RegistartionForm from "../Components/RegistartionForm";

const FormPage = () => {
  const { index } = useParams();

  let editUser = null;
  let editIndex = null;

  if (index !== undefined) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    editUser = users[index];
    editIndex = index;
  }

  return <RegistartionForm editUser={editUser} editIndex={editIndex} />;
};

export default FormPage;
