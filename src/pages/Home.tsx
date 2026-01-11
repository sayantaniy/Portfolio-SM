import { Profile } from '../components/Profile';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Languages } from '../components/Languages';
import { GitHubActivity } from '../components/GitHubActivity';

export const Home = () => {
  return (
    <div className="container">
      <Profile />
      <About />
      <Skills />
      <Education />
      <Languages />
      <GitHubActivity />
    </div>
  );
};

