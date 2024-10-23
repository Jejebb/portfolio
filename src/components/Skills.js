import { CheckCircleIcon } from "@heroicons/react/24/solid";

const skills = {
  frontend: [
    { name: "HTML/CSS", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 80 },
  ],
  backend: [
    { name: "NodeJS", value: 30 },
    { name: "MySQL", value: 50 },
    { name: "MongoDB", value: 40 },
    
  ],
};

export default function Skills() {
  const SkillItem = ({ name, value }) => (
    <div className="flex items-center gap-2 mb-4">
      <CheckCircleIcon className="h-6 w-6 text-blue-500" />
      <span className="text-gray-800 font-medium">{name}</span>
      <div className="w-full bg-gray-200 h-2 rounded-lg mx-2">
        <div
          className="bg-blue-500 h-2 rounded-lg"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="text-gray-600 text-sm">{value}%</span>
    </div>
  );

  return (
    <div className="p-12" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-2xl text-gray-500">My Skills</h2>
        <p className="text-4xl font-bold text-gray-900">Skills Journey</p>
      </div>

      <div className="space-y-12">
        {/* Frontend Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend</h3>
          <div>
            {skills.frontend.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Backend</h3>
          <div>
            {skills.backend.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
