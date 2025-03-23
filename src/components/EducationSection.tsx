const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center title-gradient">
          Formation
        </h2>
        <div className="space-y-8">
          <div className="hover-card p-6 animate-fadeInUp">
            <h3 className="text-xl font-semibold mb-2">
              BTS SIO - Option SLAM
            </h3>
            <p className="text-gray-300">
              2023-2025 | Lycée La Châtaigneraie, Mesnil-Esnard
            </p>
          </div>
          <div
            className="hover-card p-6 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Baccalauréat STI2D - Option ITEC
            </h3>
            <p className="text-gray-300">
              2022-2023 | Lycée La Châtaigneraie, Mesnil-Esnard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
