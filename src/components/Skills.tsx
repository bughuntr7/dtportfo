import React from 'react';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const Skills: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "Java (Spring Boot)", level: 85 },
        { name: "Python (FastAPI, Flask)", level: 88 },
      ]
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 75 },
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: 80 },
        { name: "GCP", level: 75 },
        { name: "Docker", level: 78 },
        { name: "Kubernetes", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Skills & <span className="text-primary">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-gradient-card p-6 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category title */}
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={`${category.category}-${skill.name}`} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar with accessibility */}
                      <div
                        className="w-full bg-muted rounded-full h-2"
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Always learning and adapting to new technologies. Currently exploring serverless architectures,
              microservices, and advanced React patterns to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Skills;