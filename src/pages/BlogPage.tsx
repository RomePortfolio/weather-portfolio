// src/pages/BlogPage.tsx
import { useState, useEffect } from 'react';

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

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nextKey, setNextKey] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchPosts = async (append = false) => {
    try {
      let url = `${API_BASE}/posts?limit=9`;
      if (append && nextKey) url += `&lastKey=${encodeURIComponent(nextKey)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();

      if (append) {
        setPosts(prev => [...prev, ...(data.posts || [])]);
      } else {
        setPosts(data.posts || []);
      }
      setNextKey(data.nextKey || null);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  const loadMore = () => {
    setLoadingMore(true);
    fetchPosts(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
          IT & Security
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Tech <span className="text-blue-300 italic">Insights</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl">
          Curated articles on cybersecurity, cloud infrastructure, DevOps, and the latest in enterprise IT — summarized by AI.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-400 rounded-full animate-spin"></div>
          <p className="text-white/50">Loading articles...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
          <p className="text-white/50 text-lg">Could not load articles right now.<br />Please try again later.</p>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
          <p className="text-2xl font-bold text-white">No articles yet</p>
          <p className="text-white/50">Check back soon — new content is on the way!</p>
        </div>
      )}

      {/* Grid */}
      {!loading && posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                onClick={() => window.location.href = `/blog/${post.id}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="h-32 bg-gradient-to-br from-blue-900 to-indigo-900 p-5 flex items-start relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 50%)'}}></div>
                  <h2 className="relative z-10 text-white font-bold text-lg leading-snug line-clamp-2">{post.title}</h2>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(post.tags) ? post.tags : []).slice(0, 2).map((tag: string) => (
                      <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getTagColor(tag)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                    {post.summary.replace(/^#+\s*/gm, '').substring(0, 150)}...
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-xs text-white/40">{formatDate(post.publishedAt)}</span>
                    {post.sourceName && <span className="text-xs text-blue-400 font-medium">{post.sourceName}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {nextKey && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="px-10 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-200 disabled:opacity-50"
              >
                {loadingMore ? 'Loading...' : 'Load More Articles'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPage;
