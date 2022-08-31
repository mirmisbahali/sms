export default function ComLog() {
  const text = "The student said he faced some issues when submitting the assessments that's why he didn't complete his assessments on time."
  const text2 = "Student has already paid the fee in college"
  const text3 = "Class call: He said he won't be able to attend tomorrow's class as he is sick. He want to reschedule his class to next weekend"
  return (
    <>
      <div class="list-group overflow-auto scrollbar" style={{ height: "480px" }}>
        <Message author="Misbah" msg={text} date="28/08/2022" />
        <Message author="Misbah" msg={text2} date="28/08/2022" />
        <Message author="Misbah" msg={text3} date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />
        <Message author="Misbah" msg="This is a message" date="28/08/2022" />

      </div>
    </>
  );
}

function Message({author, msg, date}) {
  return (
    <>
      <div
        
        class="list-group-item list-group-item-action mb-1"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">{author}</h6>
          <small>3 days ago</small>
        </div>
        <hr/>
        <p class="mb-1">{msg}</p>
        <small className="float-right">{date}</small>
      </div>
    </>
  );
}
