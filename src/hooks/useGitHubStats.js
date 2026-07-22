import { useEffect, useState } from 'react';

// Fetches public repo/star/follower counts from the GitHub REST API.
// Unauthenticated requests are capped at 60/hour per IP — plenty for a
// personal portfolio. Never put a personal access token in frontend code;
// if you need a higher rate limit, proxy the request through a small
// serverless function instead.
export function useGitHubStats(username) {
  const [data, setData] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!username) return undefined;
    let cancelled = false;

    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error(`GitHub user lookup failed (${userRes.status})`);
        const user = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );
        const repos = reposRes.ok ? await reposRes.json() : [];
        const stars = Array.isArray(repos)
          ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
          : 0;

        if (!cancelled) {
          setData({
            repos: user.public_repos || 0,
            followers: user.followers || 0,
            stars,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        console.error('GitHub API error:', err);
        if (!cancelled) {
          setData((d) => ({ ...d, loading: false, error: err.message }));
        }
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return data;
}