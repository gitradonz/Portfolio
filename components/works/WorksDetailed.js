import { motion } from "framer-motion";
import WorksSection from "./WorksSection";
import { allWorks } from "../../works/works";

const [jsProjects, javaProjects, csharpProjects, kotlinProjects] = allWorks;

const WorksDetailed = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="JAVASCRIPT">
          <WorksSection
            subtitle="Mobile & Web"
            title="JavaScript"
            description="With JavaScript I've developed both front and backend. React and React Native are the main libraries I use and some frameworks or services like NodeJS, NextJS, Express, React-Router, React-Hook-Forms..."
            projects={jsProjects}
          />
        </div>
        <div className="KOTLIN">
          <WorksSection
            subtitle="Mobile ( AndroidStudio )"
            title="KOTLIN"
            description="I used Kotlin to develop fullstack mobile applications."
            projects={kotlinProjects}
          />
        </div>
        <div className="JAVA">
          <WorksSection
            subtitle="Desktop"
            title="Java"
            description="With Java I've developed mainly backend projects. I've used JavaFX to show UI and I made connections to BBDD with JDBC, hibernate, ORM..."
            projects={javaProjects}
          />
        </div>
        <div className="CSHARP">
          <WorksSection
            subtitle="Desktop ( Unity )"
            title="C#"
            description="I've developed my first game with C# and I've used Unity and Firebase to do it. Also I connected a web and mobile app with Firebase connections."
            projects={csharpProjects}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WorksDetailed;
