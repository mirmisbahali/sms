import React from "react";

function Enrollments() {
  const courseList = [
    {
      index: "One",
      course: "Mathematics",
      start: "16 Sep 2022",
      end: "15 Sep 2023",
      progress: "30%",
    },
    {
      index: "Two",
      course: "Physics",
      start: "16 Sep 2022",
      end: "15 Sep 2023",
      progress: "20%",
    },
    {
      index: "Three",
      course: "Chemistry",
      start: "20 Sep 2022",
      end: "19 Sep 2023",
      progress: "50%",
    },
  ];
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {courseList.map((item, i) => {
        return <Enrollment key={i} {...item} />;
      })}
    </div>
  );
}

const Enrollment = ({ course, index, start, end, progress }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`panelsStayOpen-heading${index}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${index}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse${index}`}
        >
          {course}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse${index}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-heading${index}`}
      >
        <div className="accordion-body">
          <h4 className="small font-weight-bold">
            {start} <span className="float-right">{end}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: `${progress}` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollments;
