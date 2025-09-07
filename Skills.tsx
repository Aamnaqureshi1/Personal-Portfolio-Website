import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'

export function Skills() {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'SQL/NoSQL Databases', level: 85 },
    { name: 'AWS/Cloud Services', level: 75 },
  ]

  const tools = [
    'Git', 'Docker', 'Kubernetes', 'Jenkins', 'Figma', 'VSCode',
    'Postman', 'Jest', 'Cypress', 'Webpack', 'Tailwind CSS', 'MongoDB'
  ]

  const softSkills = [
    'Problem Solving', 'Team Leadership', 'Project Management', 
    'Communication', 'Agile/Scrum', 'Code Review'
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/30 to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="lg:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-medium text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3 bg-muted/50" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full"></div>
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-gradient-to-r from-accent to-secondary hover:from-primary/10 hover:to-purple-600/10 transition-all duration-300 font-medium border border-border/50">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="lg:col-span-3 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"></div>
                Soft Skills & Methodologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {softSkills.map((skill) => (
                  <div key={skill} className="text-center p-4 bg-gradient-to-br from-muted/50 to-accent/30 rounded-xl border border-border/30 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <span className="font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}