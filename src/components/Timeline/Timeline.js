import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tags from "../Tags/Tags";
import "./Timeline.css";

const Timeline = (props) => {
  const { items, type } = props || {};

  return (
    <VerticalTimeline>
      {items.map((item) => {
        const {
          id,
          date,
          icon,
          title,
          institution,
          company,
          description,
          tags,
          cgpa,
          percentage,
          awards,
        } = item || {};

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={date}
            icon={icon}
            key={id}
          >
            <h2 className="vertical-timeline-element-title">
              <strong>{title}</strong><br />
              {cgpa && <span>({cgpa} CGPA)</span>}
              {percentage && <span>({percentage} Percentage)</span>}
            </h2>
            <h4 className="vertical-timeline-element-subtitle">
              {type === "work" ? company : institution}
            </h4>
            <p className="vertical-timeline-element-description">
              {description}
            </p>
            {type === "qualifications" && awards && awards.length > 0 && (
              <>
                <h5>Awards and Achievements:</h5>
                <ul>
                  {awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </>
            )}
            <Tags id={id} tags={tags}></Tags>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
