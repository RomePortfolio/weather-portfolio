import { useState } from 'react';
interface BillingCode {
  code: string;
  desc: string;
}

export default function BillingCodes() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BillingCode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Clear function
  const clearResults = () => {
    setQuery('');
    setResults([]);
    setError(null);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      // Proxy fetch
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://www.icd10data.com/search?s=${encodeURIComponent(query)}`
      )}`;

      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error(`Proxy/Search failed (status ${response.status})`);

      const text = await response.text();
      console.log('Proxy response text length:', text.length);
      console.log('First 500 chars of response:', text.substring(0, 500));

      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      // Parsing logic
      let items = doc.querySelectorAll('.search-result-item, .result-item, li.result, .code-result, div.result');
      if (items.length === 0) {
        items = doc.querySelectorAll('li, div, p'); // broader fallback
      }

      const parsedResults = Array.from(items)
        .map(item => {
          const text = item.textContent?.trim() || '';
          // Match common 
          const codeMatch = text.match(/\b([A-Z]\d{2}(?:\.\d{1,3})?|9\d{4}|\d{4,5})\b/);
          if (!codeMatch) return null;

          const code = codeMatch[0];
          let desc = text.replace(code, '').trim().replace(/\s+/g, ' ');
          if (desc.length < 10) {
            desc = item.querySelector('p, span, div')?.textContent?.trim() || 'No description';
          }

          return { code, desc };
        })
        .filter((item): item is BillingCode => item !== null);

      if (parsedResults.length === 0) {
        setError('No codes found – try a specific code like "E11.9" or "99214". Site structure may have changed.');
      } else {
        setResults(parsedResults.slice(0, 10)); 
      }
    } catch (err) {
      setError((err as Error).message || 'Failed to fetch codes – try again');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="billing-codes" className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        Medical Billing Code Explorer
      </h2>

      <p className="text-lg text-gray-200 mb-8 max-w-3xl">
        Search ICD-10 diagnosis and CPT procedure codes with live results. Useful for medical billing, coding practice, and understanding healthcare data.
      </p>

      <form onSubmit={handleSearch} className="max-w-2xl mb-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            id="bill-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter code (e.g., E11.9, 99214) or keyword (chest pain)"
            className="flex-1 p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:border-blue-500 outline-none text-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 font-medium text-lg"
          >
            {loading ? 'Searching...' : 'Search Codes'}
          </button>
          <button
            type="button"
            onClick={clearResults}
            disabled={loading || (!query.trim() && results.length === 0 && !error)}
            className="bg-gray-700 text-white px-8 py-4 rounded-xl hover:bg-gray-600 transition disabled:opacity-50 font-medium text-lg"
          >
            Clear
          </button>
        </div>
      </form>

      {error && <p className="text-red-400 mb-6 text-lg">{error}</p>}

      {results.length > 0 && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-100 mb-6">
            Results for "{query}" ({results.length} found)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col"
              >
                <h4 className="text-xl font-bold text-blue-300 mb-3">{item.code || 'N/A'}</h4>
                <p className="text-gray-200 leading-relaxed">{item.desc || 'No description available'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && !error && results.length === 0 && query && (
        <p className="text-gray-400 text-lg">No results yet — try a code like "E11.9" or "chest pain"</p>
      )}
    </section>
  );
}