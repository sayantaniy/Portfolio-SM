import { ExternalLink } from 'lucide-react';

const GITHUB_USERNAME = 'sayantaniy';

export const GitHubActivity = () => {
  return (
    <section className="github-activity-section glass">
      <h2 className="section-title">GitHub Activity</h2>
      <div className="github-calendar-wrapper">
        <div className="github-calendar-embed-container">
          <img
            src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
            alt="GitHub Contributions"
            className="github-contribution-chart"
          />
        </div>
        <div className="github-calendar-footer">
          <div className="github-calendar-stats">
            <span className="github-contributions-text">
              View contribution details on GitHub
            </span>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-follow-link"
          >
            Follow me on GitHub
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};
