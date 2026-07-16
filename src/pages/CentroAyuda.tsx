import { useParams, useNavigate, Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Accordion } from "../ui/Accordion";
import helpData from "../data/helpData.json";
import type { HelpCategory } from "../data/types";
import { SEO } from "../components/SEO";
import { DynamicIcon } from "../ui/DynamicIcon";
import { ShareButtons } from "../ui/ShareButtons";
import { useHelpSearch } from "../hooks/useHelpSearch";

const categories = helpData as HelpCategory[];

export function CentroAyuda() {
  const { categorySlug, articleSlug } = useParams<{
    categorySlug?: string;
    articleSlug?: string;
  }>();
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, filteredCategories } = useHelpSearch(categories);
  const activeCategory = categories.find((c) => c.slug === categorySlug);


  // View 1: Category Grid
  if (!categorySlug || !activeCategory) {
    return (
      <div className="w-full bg-white">
        <SEO title="Centro de Ayuda" description="Respuestas a preguntas frecuentes sobre el servicio, estaciones y tarjetas del Tren El Insurgente." />
        <section className="bg-linear-to-b from-timt-primary to-transparent py-24 md:py-30">
          <div className="w-full px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-timt-text">
              Centro de Ayuda
            </h1>
            <p className="mt-4 text-lg text-timt-text max-w-2xl mx-auto opacity-90 mb-10">
              Encuentra respuestas a las preguntas más comunes sobre el servicio
              del Tren El Insurgente.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <LucideIcons.Search className="h-5 w-5 text-gray-400 group-focus-within:text-timt-primary transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white border border-transparent rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-timt-primary focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                placeholder="Busca un tema, artículo o palabra clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <LucideIcons.X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
          {searchQuery.trim() ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resultados de búsqueda
              </h2>
              {filteredCategories.flatMap((cat) => {
                return cat.articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/centro-ayuda/${cat.slug}/${article.slug}`}
                    className="block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-timt-primary/30"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-timt-primary/10 text-timt-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                        <DynamicIcon name={cat.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-timt-primary uppercase tracking-wide">
                        {cat.title}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p
                      className="text-gray-600 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: article.content.replace(/<[^>]*>?/gm, ""),
                      }}
                    ></p>
                  </Link>
                ));
              })}
              {filteredCategories.length === 0 && (
                <div className="text-center py-20">
                  <LucideIcons.SearchX className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No encontramos resultados
                  </h3>
                  <p className="text-gray-500">
                    Intenta buscando con otras palabras.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/centro-ayuda/${cat.slug}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-timt-primary/30"
                >
                  <div className="bg-timt-primary/10 text-timt-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DynamicIcon name={cat.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 grow leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex items-center text-timt-primary font-bold">
                    <span>Ver artículos</span>
                    <LucideIcons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // View 2: Split Layout (Sidebar + Articles)
  const getArticleShareUrl = (articleId: string) => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/centro-ayuda/${categorySlug}/${articleId}`;
  };

  const accordionItems = activeCategory.articles.map((a) => {
    const articleShareUrl = getArticleShareUrl(a.slug);
    return {
      id: a.slug,
      title: a.title,
      content: a.content,
      actions: <ShareButtons articleShareUrl={articleShareUrl} />,
    };
  });

  const handleAccordionChange = (slug: string) => {
    if (slug === articleSlug) {
      navigate(`/centro-ayuda/${categorySlug}`);
    } else {
      navigate(`/centro-ayuda/${categorySlug}/${slug}`);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="bg-linear-to-b from-timt-primary/10 to-transparent pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            className="flex text-sm text-gray-600 font-medium"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  to="/centro-ayuda"
                  className="hover:text-timt-primary transition-colors"
                >
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <LucideIcons.ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-timt-primary font-bold">
                {activeCategory.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="sticky top-24 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                Categorías
              </h2>
              <nav className="space-y-2">
                {categories.map((cat) => {
                  const isActive = cat.slug === categorySlug;
                  return (
                    <Link
                      key={cat.id}
                      to={`/centro-ayuda/${cat.slug}`}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium ${
                        isActive
                          ? "bg-timt-primary/10 text-timt-primary"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <DynamicIcon name={cat.icon} className="w-5 h-5" />
                      <span>{cat.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:w-2/3 xl:w-3/4">
            <div className="mb-10 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div className="flex items-center space-x-5">
                  <div className="bg-timt-primary/10 text-timt-primary w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                    <DynamicIcon
                      name={activeCategory.icon}
                      className="w-7 h-7"
                    />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    {activeCategory.title}
                  </h1>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            <Accordion
              items={accordionItems}
              openId={articleSlug}
              onChange={handleAccordionChange}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
