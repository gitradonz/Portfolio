import { motion } from 'framer-motion';
import WorksSection from './WorksSection';
import { allWorks } from '../../works/works';

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
            title="JavaScript - TypeScript"
            description="With JavaScript I've developed both front and backend. React and React Native are the main libraries I use and some frameworks or services like NodeJS, NextJS, Express, React-Router, React-Hook-Forms..."
            projects={jsProjects}
            totalProjects={jsProjects.length}
          />
        </div>
        <div className="KOTLIN">
          <WorksSection
            subtitle="Mobile ( AndroidStudio )"
            title="KOTLIN"
            description="I used Kotlin to develop fullstack mobile applications."
            projects={kotlinProjects}
            totalProjects={kotlinProjects.length}
          />
        </div>
        <div className="JAVA">
          <WorksSection
            subtitle="Desktop"
            title="Java"
            description="With Java I've developed mainly backend projects. I've used JavaFX to show UI and I made connections to BBDD with JDBC, hibernate, ORM..."
            projects={javaProjects}
            totalProjects={javaProjects.length}
          />
        </div>
        <div className="CSHARP">
          <WorksSection
            subtitle="Desktop (Unity) - Mobile (Xamarin)"
            title="C#"
            description="I've developed my first game with C# and I've used Unity and Firebase to connect with other projects. Also made some mobile applications with Xamarin Forms."
            projects={csharpProjects}
            totalProjects={csharpProjects.length}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WorksDetailed;
