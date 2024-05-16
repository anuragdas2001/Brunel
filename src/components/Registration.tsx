import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  // Function to handle input change for name
  const handleNameChange = (event: any) => {
    const newName = event.target.value;
    setName(newName);
    // Check if both name and email are not empty to enable submit button
    setIsSubmitDisabled(newName === "" || email === "" || emailError !== "");
  };

  // Function to handle input change for email
  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Check email format and set error message if invalid
    if (!validateEmail(newEmail)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
    // Check if both name and email are not empty to enable submit button
    setIsSubmitDisabled(
      newEmail === "" || name === "" || !validateEmail(newEmail)
    );
  };

  // Function to validate email format
  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate("/registration/success");
  };

  return (
    <>
      <div className="flex justify-center align-middle items-center mt-36">
        <div className="absolute">
          <h1 className="covered-by-your-grace-regular ms-20 text-3xl text-green-500">
            Registration Form
          </h1>
          <h1 className="manrope">Start your success</h1>
          <h1 className="ms-5 manrope"> Journey here!</h1>
        </div>
        <div className="absolute flex justify-center align-middle items-center mt-52">
          <form onSubmit={handleSubmit} className="absolute mt-40">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 border-2 mt-20 rounded-3xl bg-[#EFEFEF]"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              className={`p-2 border-2 mt-3 rounded-3xl  bg-[#EFEFEF] ${
                emailError ? "border-red-500" : ""
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="mt-2">
              {emailError && (
                <>
                  <img src="/Badges.png" className="absolute h-5 w-5" alt="" />{" "}
                  <h1 className="text-red-500 text-sm ms-4">{emailError}</h1>
                </>
              )}
            </div>
            <br />
            <button
              type="submit"
              className={`h-10 w-64 ms-2 rounded-full p-2 border-2 bg-black text-white mt-4 ${
                isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
