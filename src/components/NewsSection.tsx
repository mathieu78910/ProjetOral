import { useState } from "react";
import { ExternalLink, Download } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  image: string;
  details: string;
  downloadUrl: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  return (
    <section id="news" className="py-20 glass-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center title-gradient">
          Actualités Réalité Virtuelle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="hover-card overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    item.category === "Défense"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <div
                  className={`${selectedNews === item.id ? "block" : "hidden"}`}
                >
                  <p className="text-gray-300 mb-4">{item.details}</p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setSelectedNews(selectedNews === item.id ? null : item.id)
                    }
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    {selectedNews === item.id ? "Voir moins" : "Voir plus"}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                  {item.downloadUrl && (
                    <a
                      href={item.downloadUrl}
                      download
                      className="button-style flex items-center px-4 py-2"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
