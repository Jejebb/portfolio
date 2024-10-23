import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    name: "Age:",
    description: "20 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "Jayveecayetano@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Concepcion, Iloilo",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative px-6 py-24" id="about">
      <div className="max-w-2xl mx-auto">
        <p className="mt-2 text-4xl font-bold tracking-tight">
          About Me
        </p>
        <p className="mt-6 text-lg leading-8" data-aos="fade-right">
              Hi, I'm Jayvee Cayetano, a passionate Software Developer from Iloilo. I specialize in designing immersive learning experiences with a strong focus on hands-on application development. My mission is to inspire and empower others to embark on their own journeys in technology. Whether it’s mastering the intricacies of programming languages or exploring the latest advancements in tech, I am dedicated to creating an environment where people can thrive and grow their skills.
        </p>
        <div className="mt-10 space-y-8 text-base leading-7" data-aos="fade-right">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <feature.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
              <dt className="inline font-semibold">{feature.name}</dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </div>
        <div className="grid gap-x-6 sm:grid-cols-2 mt-10">
          <div className="ring-2 ring-base-300 bg-base-200 rounded-2xl p-5 shadow-xl" data-aos="zoom-in">
            <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
            <h2 className="text-2xl text-center font-bold tracking-tight">Experience</h2>
            <ul className="mt-3 space-y-3 list-disc list-inside">
              <li>Gained experience in web development through college projects.</li>
              <li>Basic understanding of frontend technologies like HTML, CSS, JavaScript.</li>
              <li>Collaborated with classmates on group projects.</li>
            </ul>
          </div>
          <div className="ring-2 ring-base-300 bg-base-200 rounded-2xl p-5 shadow-xl" data-aos="zoom-in">
            <AcademicCapIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
            <h2 className="text-2xl text-center font-bold tracking-tight">Education</h2>
            <ul className="mt-3 space-y-3 list-disc list-inside">
              <li>Currently pursuing a degree in Computer Science.</li>
              <li>Completed various projects using web development technologies.</li>
              <li>Learning about software development and programming languages.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
