import React from "react";
import { useForm } from "react-hook-form";
import './styling.css';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.File);
    console.log(data.Description);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><input ref={register}  type="file" name="File"/></div>
        <div><input ref={register} label="Description" placeholder="Add description" type="text" name="Description" /></div>
        <div><button className="style-btn" >Submit</button></div>
      </form>
  </div>
  );
}

export default App;