import { ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const GITHUB_USERNAME = 'sayantaniy';

export const GitHubActivity = () => {
  const { theme } = useTheme();
  const chartColor = theme === 'dark' ? 'f472b6' : 'db2777';

  return (
    <section className="github-activity-section glass">
      <div className="section-header">
        <h2 className="section-title">
          <span>GitHub Activity</span>
        </h2>
        <span className="section-tag">GitHub</span>
      </div>

      <div className="github-activity-wrapper">
        <div className="github-chart-container">
          <img
            src={`https://ghchart.rshah.org/${chartColor}/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub Contribution Calendar`}
            className="github-chart-img"
            loading="lazy"
          />
        </div>

        <div className="github-meta-footer">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)]"></span>
              @{GITHUB_USERNAME}
            </span>
            <span className="text-xs text-[var(--text-muted)]">• Continuous Open-Source Learning</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-btn"
            >
              <span>GitHub Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
