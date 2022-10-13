import { useState } from "react";

import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formOnSubmitHandler = (evt) => {};

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={formOnSubmitHandler}>
      <div className="text-center">
        <p className="font-semibold text-slate-700">Register Form</p>
      </div>

      <div>
        <input
          className="py-2 px-4 border border-gray-200 w-full"
          type="text"
          placeholder="Email"
          value={email}
          onChange={inputEmailOnChangeHandler}
        />
      </div>

      <div>
        <input
          className="py-2 px-4 border border-gray-200 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={inputPasswordOnChangeHandler}
        />
      </div>

      <div>
        <button
          type="submit"
          className="py-2 px-4 bg-slate-200 hover:bg-slate-300 flex flex-row gap-1 items-center rounded-full w-full"
        >
          Register
        </button>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <Link
          to="/login"
          className="underline text-blue-400 hover:text-blue-500"
        >
          Wanna login?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
