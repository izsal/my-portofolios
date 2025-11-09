import { useRouter } from "next/router";
import { useState } from "react";
import { projectData } from "../../components/data.js";
import Image from "next/image";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project by id
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-white text-center mt-20">Project not found</div>
    );
  }

  // Handle image display – could be string or array
  const displayImage = Array.isArray(project.image)
    ? project.image[0]
    : project.image;
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-[#02050a] min-h-screen pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <div className="w-[90%] md:w-[80%] max-w-4xl mx-auto">
        <button onClick={() => router.back()} className="cta-btn">
          ← Back to Projects
        </button>

        <div className="bg-[#0a0a0a] rounded-lg p-6 md:p-8 shadow-lg border border-gray-800">
          {/* Image Slider Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              marginBottom: "1rem",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#2a2b2d",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              style={{ objectFit: "contain", padding: "10px" }}
            />

            {/* Navigation Arrows - Only show if multiple images */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#ffcc1a",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 204, 26, 0.9)";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(0, 0, 0, 0.5)";
                    e.currentTarget.style.color = "#ffcc1a";
                  }}
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#ffcc1a",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 204, 26, 0.9)";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(0, 0, 0, 0.5)";
                    e.currentTarget.style.color = "#ffcc1a";
                  }}
                >
                  ›
                </button>

                {/* Image Counter */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Navigation - Only show if multiple images */}
          {hasMultipleImages && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  style={{
                    width: "60px",
                    height: "60px",
                    border:
                      currentImageIndex === index
                        ? "3px solid #ffcc1a"
                        : "2px solid #666",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundColor: "#2a2b2d",
                    padding: "0",
                    position: "relative",
                    transition: "all 0.3s ease",
                    opacity: currentImageIndex === index ? 1 : 0.6,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity =
                      currentImageIndex === index ? "1" : "0.6";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "contain", padding: "5px" }}
                  />
                </button>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies (if available) */}
          {project.technologies && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors font-semibold inline-flex items-center gap-2"
              >
                <i className="fa-brands fa-github"></i>
                View on GitHub
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
