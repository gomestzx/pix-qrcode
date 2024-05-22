"use client";
import { useState } from "react";
import CardGenerator from "../TemplateGenerator/TemplateGenerator";
import Form from "../Form/Form";
import TemplateGenerator from "../TemplateGenerator/TemplateGenerator";

function FormContainer() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  return (
    <>
      <Form isVisible={isFormVisible} callback={() => setIsFormVisible(false)} />
      <TemplateGenerator isVisible={!isFormVisible} callback={() => setIsFormVisible(true)} />
    </>
  );
}

export default FormContainer;
