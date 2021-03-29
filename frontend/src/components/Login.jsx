import { useState } from "react";
import axios from "axios";

function Login() {
  const [textInput, setTextInput] = useState({
    name: "",
    message: "",
    api: "/api",
  });

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
    setTextInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit = (event) => {
    axios.post(`${textInput.api}`, textInput, {
      withCredentials: true,
    });
    setTextInput((prev) => ({ ...prev, name: "", message: "" }));
    event.preventDefault();
  };

  return (
    <div className="px-6">
      <form onSubmit={handleFormSubmit} className="mt-8 max-w-md">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              className="mt-1 block w-full"
              type="text"
              name="name"
              value={textInput.name}
              onChange={handleTextInputChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">message</span>
            <input
              className="mt-1 block w-full"
              type="text"
              name="message"
              value={textInput.message}
              onChange={handleTextInputChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">api</span>
            <input
              className="mt-1 block w-full"
              type="text"
              name="api"
              value={textInput.api}
              onChange={handleTextInputChange}
            />
          </label>
          <input
            className="mt-1 block w-full bg-transparent hover:bg-blue-50 focus:bg-blue-500 text-blue-700 font-semibold focus:text-white py-2 px-4 border border-blue-500 rounded"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
