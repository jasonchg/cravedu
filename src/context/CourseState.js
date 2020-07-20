import React, { createContext, useReducer } from "react";
import CourseReducer from "./CourseReducer";

// Initial State
const initialState = {
  courses: [
    {
      id: "xas-sda-qqq",
      title: "I Love Coding",
      description:
        "This is a course that will teach u how to code,   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, odit tenetur quasi aperiam aut recusandae. ",
      instructor: "JCPro",
      thumbnail:
        "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      lessons: [
        {
          id: "les-1-lov-coding",
          subtitle: "Lesson 1 - Introduction",
          path: "/i-love-coding/les-1-lov-coding",
        },
        {
          id: "les-2-lov-coding",
          subtitle: "Lesson 2 - Environment Setup",
          path: "/i-love-coding/les-2-lov-coding",
        },
        {
          id: "les-3-lov-coding",
          subtitle: "Lesson 3 - Crash To Code",
          path: "/i-love-coding/les-3-lov-coding",
        },
        {
          id: "les-4-lov-coding",
          subtitle: "Lesson 4 - The End",
          path: "/i-love-coding/les-4-lov-coding",
        },
      ],
    },
    {
      id: "opa-qdr-zzs",
      title: "Network Basic",
      description: "This is a course that will teach u how to networking ",
      instructor: "JCPro",
      thumbnail:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      lessons: [
        {
          id: "les-1-net-basic",
          subtitle: "Lesson 1 - Introduction",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-2-net-basic",
          subtitle: "Lesson 2 - Environment Setup",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-3-net-basic",
          subtitle: "Lesson 3 - Crash To Network",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-4-net-basic",
          subtitle: "Lesson 4 - The End",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-5-net-basic",
          subtitle: "Lesson 5 - Bonus",
          path: "/network-basic/les-5-net-basic",
        },
      ],
    },
    {
      id: "opa-qdr-zzs",
      title: "Network Basic",
      description: "This is a course that will teach u how to networking ",
      instructor: "JCPro",
      thumbnail:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      lessons: [
        {
          id: "les-1-net-basic",
          subtitle: "Lesson 1 - Introduction",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-2-net-basic",
          subtitle: "Lesson 2 - Environment Setup",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-3-net-basic",
          subtitle: "Lesson 3 - Crash To Network",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-4-net-basic",
          subtitle: "Lesson 4 - The End",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-5-net-basic",
          subtitle: "Lesson 5 - Bonus",
          path: "/network-basic/les-5-net-basic",
        },
      ],
    },
    {
      id: "opa-qdr-zzs",
      title: "Network Basic",
      description: "This is a course that will teach u how to networking ",
      instructor: "JCPro",
      thumbnail:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      lessons: [
        {
          id: "les-1-net-basic",
          subtitle: "Lesson 1 - Introduction",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-2-net-basic",
          subtitle: "Lesson 2 - Environment Setup",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-3-net-basic",
          subtitle: "Lesson 3 - Crash To Network",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-4-net-basic",
          subtitle: "Lesson 4 - The End",
          path: "/network-basic/les-1-net-basic",
        },
        {
          id: "les-5-net-basic",
          subtitle: "Lesson 5 - Bonus",
          path: "/network-basic/les-5-net-basic",
        },
      ],
    },
  ],
};

// Create Context

export const CourseContext = createContext(initialState);

export const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CourseReducer, initialState);

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
