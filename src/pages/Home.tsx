import { Profile } from '../components/Profile';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Languages } from '../components/Languages';
import { GitHubActivity } from '../components/GitHubActivity';

export const Home = () => {
  return (
    <div className="container">
      <Profile />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Languages />
      <GitHubActivity />
    </div>
  );
};

export default Home;
