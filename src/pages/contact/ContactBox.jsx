import React from "react";
import "../../style/contactLayout/contact.scss";

const ContactBox = () => {
  return (
    <div>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required="" placeholder="your mail"/>
          </div>
          <div className="form-group">
            <label for="textarea">How Can We Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required=""
            >
              {" "}
            </textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;
