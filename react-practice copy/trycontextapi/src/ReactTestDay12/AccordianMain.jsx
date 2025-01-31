import React from "react";
import Accordion from "./Accordian";

const AccordionMain=()=>{

    const arr = [
        {
          heading: "HTML",
          content:
            " The HyperText Markup Language or HTML is the standard markuplanguage for documents designed to be displayed in a web browser.",
        },
        {
          heading: "CSS",
          content:
            " Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        },
        {
          heading: "JavaScript",
          content:
            "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
        },
    ]

    return (
        <div>
          {arr.map((obj) => {
            return <Accordion heading={obj.heading} content={obj.content} />;
          })}
        </div>
      );



}

export default AccordionMain