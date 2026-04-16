// src/pages/BlogPostPage.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE = 'https://0575zfxnt7.execute-api.us-east-1.amazonaws.com/dev';

interface Post {
  id: string;
  title: string;
  summary: string;
  sourceUrl: string;
  sourceName: string;
  publishedAt: string;
  tags: string[];
  imageUrl?: string;
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return ''; }
}

function getTagColor(tag: string) {
  const colors: Record<string, string> = {
    'security': 'bg-red-500/20 text-red-300',
    'networking': 'bg-blue-500/20 text-blue-300',
    'cloud': 'bg-cyan-500/20 text-cyan-300',
    'devops': 'bg-green-500/20 text-green-300',
    'ai': 'bg-purple-500/20 text-purple-300',
    'linux': 'bg-orange-500/20 text-orange-300',
  };
  return colors[tag?.toLowerCase()] || 'bg-white/10 text-white/70';
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE}/posts/${id}`);
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        setPost(data);
        document.title = `${data.title} | Rome Colmenares`;
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPost();
  }, [id]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin"></div>
      <p className="text-white/50">Loading article...</p>
    </div>
  );

  if (error || !post) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
      <p className="text-2xl font-bold text-white">Article not found</p>
      <p className="text-white/50">This article may have been removed or the link is incorrect.</p>
      <button
        onClick={() => navigate('/blog')}
        className="mt-4 flex items-center gap-2 px-8 py-3 bg-blue-500/20 text-blue-300 rounded-xl font-medium hover:bg-blue-500/30 transition-colors"
      >
        ← Back to Tech Insights
      </button>
    </div>
  );

  const tags = Array.isArray(post.tags) ? post.tags : [];
  const paragraphs = post.summary.split('\n').filter(p => p.trim());

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      {/* Back button */}
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-10 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Tech Insights
      </button>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string) => (
            <span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">{post.title}</h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-6 pb-8 mb-10 border-b border-white/10">
        <span className="text-sm text-white/40">{formatDate(post.publishedAt)}</span>
        {post.sourceName && (
          <span className="text-sm text-blue-400 font-medium">{post.sourceName}</span>
        )}
      </div>

      {/* Body */}
      <div className="space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-white/70 text-lg leading-relaxed">
            {p.replace(/^#+\s*/, '')}
          </p>
        ))}
      </div>

      {/* Source link */}
      {post.sourceUrl && (
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-sm text-white/40 mb-3 font-medium">Read the original article</p>
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors break-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            {post.sourceUrl}
          </a>
        </div>
      )}

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          All Articles
        </button>
      </div>
    </div>
  );
};

export default BlogPostPage;
