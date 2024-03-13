import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import UseForm from "./components/UseFormComponent/UseFormComponent";
import Layout from "./components/Layout/Layout";
import UseController from "./components/UseControllerComponent/UseController";
import UseFormContext from "./components/UseFormContextComponent/UseFormContext";
import UseFormWatch from "./components/UseFormWatchComponent/UseFormWatch";
import UseFormState from "./components/UseFormStateComponent/UseFormState";
import UseFormFieldArray from ".//components/UseFormFieldArrayComponent/UseFormFieldArray";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UseForm />} />
        <Route path="/UseController" element={<UseController />} />
        <Route path="/UseFormContext" element={<UseFormContext />} />
        <Route path="/UseFormWatch" element={<UseFormWatch />} />
        <Route path="/UseFormState" element={<UseFormState />} />
        <Route path="/UseFormFieldArray" element={<UseFormFieldArray />} />
      </Route>
    </Routes>
  );
}

export default App;
