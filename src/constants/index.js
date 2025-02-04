import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    kotlin,
    tailwind,
    java,
    sql,
    git,
    figma,
    python,
    meta,
    nav,
    hoyskolenKristiania,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web designer",
      icon: creator,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor degree in IT - Frontend and Mobile development",
      company_name: "Høyskolen Kristiania",
      icon: hoyskolenKristiania,
      iconBg: "#383E56",
      date: "August 2021 - June 2024",
      points: [
        "Graduated with a specialization in Frontend and Mobile development from Høyskolen Kristiania, where i gained expertise in modern web technologies such as React, Typescript, Java and many other technologies. Throughout my studies, I worked on various projects that emphasized responsive web designs, mobile-first development, and progressive web applications. Additionally, I gained hands-on experience with agile development methodologies, collaborating with team to create innovative digital solutions.",
      ],
    },
    {
      title: "Bachelor exam at Nav",
      company_name: "NAV",
      icon: nav,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - June 2024",
      points: [
        "As part of my bachelor's degree, I collaborated with NAV to develop a user-centric digital solution focused on accessibility and usability. My responsibilities included developing an intuitive and accessible UI using React and TypeScript, ensuring a seamless and intuitive user experience. I actively engaged with users, conducting interviews and formulating targeting questions to gather insights that helped us under the developing process, making the solution more user friendly. Addiotionally, I integrated and utilized data from Amplitude and Siteimprove to enhance accessibility and user experience. The solution is actively being used and further developed today, and the project was even featured in an article on Kode24, highlighting it's real-world impact and innovation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  export { services, technologies, experiences };