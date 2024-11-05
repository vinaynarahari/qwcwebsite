'use client'
import { useState } from 'react';

const Form = () => {
  const [isAccepted, setIsAccepted] = useState(false); // Track if user accepted terms
  const [isDeclined, setIsDeclined] = useState(false); // Track if user declined terms

  // Handle Accept checkbox change
  const handleAcceptChange = (e) => {
    if (e.target.checked) {
      setIsAccepted(true);
      setIsDeclined(false); // Uncheck Decline if Accept is checked
    } else {
      setIsAccepted(false);
    }
  };

  // Handle Decline checkbox change
  const handleDeclineChange = (e) => {
    if (e.target.checked) {
      setIsDeclined(true);
      setIsAccepted(false); // Uncheck Accept if Decline is checked
    } else {
      setIsDeclined(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4 w-[100vw] max-w-[1440px]">
      <form className="w-full max-w-[600px] bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
        <div>
          <section className="w-full">
            <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
              <div>
                <label id="fname">First name:<span className="text-[#F79F48]">*</span></label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  className="border rounded-lg w-full p-2"
                  placeholder="Your First Name"
                />{" "}
                <br /> <br />
              </div>
              <div>
                <label id="lname">Last name:<span className="text-[#F79F48]">*</span></label> <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  required
                  className="border rounded-lg w-full p-2"
                  placeholder="Your Last Name"
                />{" "}
                <br /> <br />
              </div>
            </div>

            <div>
              <label id="phone">Phone Number:<span className="text-[#F79F48]">*</span></label> <br />
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                className="border rounded-lg w-full p-2"
                placeholder="Your Phone Number"
              />{" "}
              <br /> <br />
            </div>

            <div>
              <label id="email">Email Address:<span className="text-[#F79F48]">*</span></label> <br />
              <input
                required
                type="email"
                id="email"
                name="email"
                className="border rounded-lg w-full p-2"
                placeholder="Your Email"
              />{" "}
              <br /> <br />
            </div>
          </section>

          <section>
            <label id="fname">Query Type:<span className="text-[#F79F48]">*</span></label>
            <br />
            <br />
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
              <div className="flex gap-2 border p-4 rounded-lg w-full">
                <input
                  type="radio"
                  id="GD"
                  name="fav_language"
                  value="GD"
                  required
                />
                <label id="GE">General Enquiry</label>
              </div>
              <div className="flex gap-2 border p-4 rounded-lg w-full">
                <input
                  type="radio"
                  id="SR"
                  name="fav_language"
                  value="SR"
                  required
                />
                <label id="Support Enquiry">Support Enquiry</label>
              </div>
              <br />
            </div>
            <br />
            <label id="fname">Message:<span className="text-[#F79F48]">*</span></label> <br />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              className="border w-full p-2 rounded-lg"
              required
            ></textarea>
            <br /> <br />

            {/* Terms and Conditions with Accept and Decline Checkboxes */}
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <span>
                  By signing up for the <strong>QWC Text</strong> program, you agree to receive <strong>updates, progress, and ads</strong>.
                  Message and data rates may apply. You will receive <strong>~4</strong> messages per month.
                  For assistance, text <strong>HELP</strong> or contact customer care at <strong>[Customer Care Number]</strong>.
                  To opt out, text <strong>STOP</strong> to cancel at any time.
                  By signing up, you also agree to Salesmsg's <a href="[Privacy Policy Link]" target="_blank">Privacy Policy</a> and <a href="[Terms and Conditions Link]" target="_blank">Terms & Conditions</a>.
                </span>
                <span className="text-[#F79F48]">*</span>
              </div>

              {/* Accept/Decline Checkboxes */}
              <div className="flex flex-col gap-4">
                {/* Accept Checkbox */}
                <div className="flex gap-4 items-center">
                  <input
                    type="checkbox"
                    id="accept"
                    checked={isAccepted}
                    onChange={handleAcceptChange}
                    className="form-checkbox"
                  />
                  <label htmlFor="accept" className="text-sm">
                    I accept the terms and conditions.
                  </label>
                </div>

                {/* Decline Checkbox */}
                <div className="flex gap-4 items-center">
                  <input
                    type="checkbox"
                    id="decline"
                    checked={isDeclined}
                    onChange={handleDeclineChange}
                    className="form-checkbox"
                  />
                  <label htmlFor="decline" className="text-sm">
                    I decline the terms and conditions.
                  </label>
                </div>

                {/* Conditional Submit Button */}
                <div className="mt-6">
                  <input
                    className={`bg-[#F79F48] w-full p-2 rounded-lg text-white ${!(isAccepted && !isDeclined) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    type="submit"
                    value="Submit"
                    required
                    disabled={!(isAccepted && !isDeclined)} // Disable Submit if not accepted
                  />
                  {!isAccepted && !isDeclined && (
                    <p className="text-red-500 text-sm mt-2">You must accept / decline the terms to proceed.</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </form>
    </main>
  );
};

export default Form;




