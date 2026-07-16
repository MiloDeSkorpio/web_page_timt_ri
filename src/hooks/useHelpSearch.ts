import { useState, useMemo } from 'react';
import type { HelpCategory } from '../data/types';

export function useHelpSearch(categories: HelpCategory[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();

    return categories
      .map((cat) => {
        const catMatches =
          cat.title.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query);
          
        const matchingArticles = cat.articles.filter(
          (a) =>
            a.title.toLowerCase().includes(query) ||
            a.content.toLowerCase().includes(query),
        );

        if (catMatches || matchingArticles.length > 0) {
          return {
            ...cat,
            // Only return the articles that match if the search isn't empty
            articles: catMatches && matchingArticles.length === 0 ? cat.articles : matchingArticles
          };
        }
        return null;
      })
      .filter(Boolean) as HelpCategory[];
  }, [searchQuery, categories]);

  return { searchQuery, setSearchQuery, filteredCategories };
}
