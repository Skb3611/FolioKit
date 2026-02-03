import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// lib/github-stars.ts
export async function getGitHubStars() {
  const res = await fetch(
    "https://api.github.com/repos/Skb3611/FolioKit",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600, // cache for 1 hour
      },
    }
  );

  if (!res.ok) return 0;

  const data = await res.json();
  return data.stargazers_count as number;
}
