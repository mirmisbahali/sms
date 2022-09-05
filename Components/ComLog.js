import { useEffect, useState } from "react";

export default function ComLog({ sid }) {
  const text =
    "The student said he faced some issues when submitting the assessments that's why he didn't complete his assessments on time.";
  const text2 = "Student has already paid the fee in college";
  const text3 =
    "Class call: He said he won't be able to attend tomorrow's class as he is sick. He want to reschedule his class to next weekend";

  const [msg, setMsg] = useState([]);
  useEffect(() => {
    const base = `https://docs.google.com/spreadsheets/d/${process.env.NEXT_PUBLIC_SHEET_ID}/gviz/tq?`;
    const sheetName = `Communication`;
    const q = `Select * Where A="${sid}"`;
    const query = encodeURIComponent(q);
    const url = `${base}&sheet=${sheetName}&tq=${query}`;
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
        const temp = [];
        jsData.table.rows[0]["c"].forEach((i) => {
          if (i) {
            temp.unshift(i);
          }
        });

        const msgArr = temp.map((i) => i.v).slice(1, -5)
        setMsg(msgArr);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div
        className="list-group overflow-auto scrollbar"
        style={{ height: "480px" }}
      >
        {msg.map((i, k) => {
           return <Message author="Misbah" msg={i} key={k} date="28/08/2022" />;
        })}
        
      </div>
    </>
  );
}

function Message({ author, msg, date }) {
  return (
    <>
      <div
        className="list-group-item list-group-item-action mb-1"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">{author}</h6>
          <small>3 days ago</small>
        </div>
        <hr />
        <p className="mb-1">{msg}</p>
        <small className="float-right">{date}</small>
      </div>
    </>
  );
}
