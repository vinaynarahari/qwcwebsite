const Form = () => {
    return (
        <main className="flex min-h-screen flex-col justify-between p-4 w-[100vw] max-w-[1440px] items-center">
          <form>
            <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
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
                  <label id="fname">Email Address:<span className="text-[#F79F48]">*</span></label> <br />
                  <input
                    required
                    type="text"
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
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    placeholder="title"
                    required
                  />
                  <br />
                  <label htmlFor="consent">
                  <span>By signing up, you agree to Salesmsg's terms of <br></br>service, privacy policy, and to receive text messages.<br></br> Msg&data rates may apply.Reply STOP to end, HELP for help.</span><span className="text-[#F79F48]">*</span>
                  </label>
                </div>
                <br />
              </section>
            </div>
            <input
              className="bg-[#F79F48] w-full p-2 rounded-lg text-white"
              type="submit"
              value="Submit"
              required
            />
          </form>
        </main>
      );
};

export default Form;