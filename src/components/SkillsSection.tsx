import SkillLabel from "./SkillLabel";

export default function SkillsSection() {
  const skills: string[] = [
    "React.JS",
    "Next.JS",
    "Vue.JS",
    "Javascript",
    "Typescript",
    "Contentful",
    "Prismic",
    "HTML",
    "CSS",
    "TailwindCSS",
    "C",
    "C++",
    "Docker",
    "Erlang",
    "Flask",
    "GraphQL",
    "Heroku",
    "Java",
    "Kotlin",
    "SQL",
    "Python",
    "Ruby on Rails",
    "Google Analytics",
    "CI/CD",
    "Elasticsearch",
    "Ktor",
    "REST",
    "Git",
    "Github Actions",
  ];
  return (
    <div className="default-max-width flex flex-col items-center">
      <h2 className="text-center text-4xl">My skills</h2>
      <div className="mb-6 mt-2 h-0.5 w-32 bg-black" />
      <div className="flex max-w-3xl flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <SkillLabel key={skill} name={skill}></SkillLabel>
        ))}
      </div>
    </div>
  );
}
