import React from "react";
import EmailOpenIcon from "../assets/emailOpen.svg";
import EmailCloseIcon from "../assets/emailClose.svg";
import PreviousArrow from "../assets/previousArrow.svg";
import { useState } from "react";

const MainComponent = ({ data, setData }) => {
  const [mailData, setMailData] = useState();
  const [openMail, setOpenMail] = useState(false);

  const handleClick = (mail) => {
    setOpenMail(true);
    setMailData(mail);
    setData((prev) =>
      prev.map((data) => {
        if (data.id == mail.id) {
          return {
            ...data,
            read: true,
          };
        } else {
          return data;
        }
      })
    );
  };
  return (
    <>
      {!openMail ? (
        <div style={{ width: "100%" }}>
          <table style={{ width: "100%" }}>
            {data.map((e) => (
              <tr
                style={{ borderBottom: "1px solid #cecece" }}
                onClick={() => handleClick(e)}
              >
                <td style={{ padding: "1rem 0.5rem" }}>
                  <img
                    src={e.read ? EmailOpenIcon : EmailCloseIcon}
                    height="24px"
                    alt="not"
                  />
                </td>
                <td style={{ fontWeight: `${e.read ? "" : "bold"}` }}>
                  {e.to == "jack@test.com" ? e.from : `To: ${e.to}`}
                </td>
                <td style={{ fontWeight: `${e.read ? "" : "bold"}` }}>
                  {e.subject}
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <div style={{ padding: "1rem" }}>
          <p>
            <img
              src={PreviousArrow}
              height="24px"
              alt="not"
              onClick={() => setOpenMail(false)}
            />
          </p>
          <p>From: {mailData.from} </p>
          <p>To: {mailData.to} </p>
          <p>Subject: {mailData.subject}</p>
          <p>{mailData.text}</p>
        </div>
      )}
    </>
  );
};

export default MainComponent;
