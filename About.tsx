import { Card, CardContent } from "./ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-accent/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, experience, and what
            drives my passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
              My Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over
                5 years of experience creating digital solutions
                that make a difference. My journey began with a
                curiosity about how websites work, which quickly
                evolved into a deep love for programming and
                problem-solving.
              </p>
              <p>
                I specialize in modern web technologies
                including React, Node.js, and cloud platforms. I
                believe in writing clean, maintainable code and
                creating user experiences that are both
                beautiful and functional.
              </p>
              <p>
                When I'm not coding, you can find me exploring
                new technologies, contributing to open-source
                projects, or enjoying outdoor activities. I'm
                always eager to take on new challenges and
                collaborate with fellow developers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-primary to-purple-600 text-primary-foreground p-3 rounded-lg shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Experience
                    </h4>
                    <p className="text-muted-foreground">
                      5+ Years in Web Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-primary-foreground p-3 rounded-lg shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Abbottabad, Pakistan{" "}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-primary-foreground p-3 rounded-lg shadow-lg">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-muted-foreground">
                      BS Computer Science
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}