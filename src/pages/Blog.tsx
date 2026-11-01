import { BookOpen } from 'lucide-react';

export const Blog = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <section className="glass">
        <div className="section-header">
          <h1 className="section-title">
            <span>Blog</span>
          </h1>
          <span className="section-tag">Writing</span>
        </div>
        <p className="about-text">
          Notes, technical articles, and insights on web technologies, algorithms, and engineering.
        </p>

        {/* Empty state */}
        <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-center text-[var(--text-muted)]">
            <BookOpen size={18} />
          </div>
          <p className="text-sm font-medium text-[var(--text-color)]">
            No articles published yet
          </p>
          <p className="text-xs text-[var(--text-secondary)] max-w-sm">
            Writing in progress. Notes on engineering, algorithms, and Next.js will be posted here soon.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
