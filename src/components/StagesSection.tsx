import { useState } from "react";
import { ExternalLink, Download, FileText } from "lucide-react";

interface Stage {
  id: string;
  title: string;
  period: string;
  image: string;
  details: string;
  downloadUrl: string;
  attestationUrl: string;
}

interface StagesSectionProps {
  stages: Stage[];
}

const StagesSection = ({ stages }: StagesSectionProps) => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  return (
    <section id="stages" className="py-20 glass-section my-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center title-gradient">
          Stages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="hover-card overflow-hidden rounded-lg"
            >
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-gray-300 mb-4">Période : {stage.period}</p>
                <div
                  className={`${
                    selectedStage === stage.id ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-300 whitespace-pre-line mb-4">
                    {stage.details}
                  </p>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <button
                    onClick={() =>
                      setSelectedStage(
                        selectedStage === stage.id ? null : stage.id
                      )
                    }
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    {selectedStage === stage.id ? "Voir moins" : "Voir plus"}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                  <div className="flex gap-2">
                    {stage.downloadUrl && (
                      <a
                        href={stage.downloadUrl}
                        download
                        className="button-style flex items-center px-4 py-2"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Rapport
                      </a>
                    )}
                    {stage.attestationUrl && (
                      <a
                        href={stage.attestationUrl}
                        download
                        className="button-style flex items-center px-4 py-2"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Attestation
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
