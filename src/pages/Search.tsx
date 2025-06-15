
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animate these words
const animatedWords = [
  "Hiring",
  "Sales",
  "Student",
  "Researchers",
  "Founders",
  "Networking",
];

const recentQueries = [
  "people who started a startup in AI field",
  "employee who works at top mnc's and has experience of 3years and currently live in mumbai",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [animatedIndex, setAnimatedIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  // Handle cycling the animated words
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setAnimatedIndex((prev) => (prev + 1) % animatedWords.length);
        setFade(true);
      }, 500); // duration for fade
    }, 3000);
    return () => clearTimeout(timeout);
  }, [animatedIndex]);

  // Logo click handler
  const handleLogoClick = () => navigate("/");

  // Back arrow click
  const handleBack = () => navigate("/");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#2A2A2A", color: "#FFF" }}
    >
      {/* Back arrow at top right */}
      <button
        className="absolute top-8 right-8 flex items-center justify-center border border-white rounded-full"
        style={{ width: 40, height: 40, outline: "none" }}
        onClick={handleBack}
        aria-label="Go back"
      >
        <ArrowLeft size={30} stroke="#FFF" />
      </button>

      {/* Fixed/floating sidebar at top-left */}
      <div
        className="absolute top-8 left-8 flex flex-col items-start"
        style={{ gap: 32 }}
      >
        {/* Logo and Clura name */}
        <div
          className="flex items-center"
          style={{ gap: 10, cursor: "pointer" }}
          onClick={handleLogoClick}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6B48FF 0%, #A78BFA 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          <span
            style={{
              color: "#FFF",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "1.5px",
              userSelect: "none",
            }}
          >
            Clura
          </span>
        </div>
        {/* Card buttons */}
        <div className="flex flex-col" style={{ gap: 10 }}>
          <button
            className="transition hover:bg-[#222] active:scale-95"
            style={{
              width: 200,
              height: 50,
              border: "1px solid #FFF",
              background: "#2A2A2A",
              borderRadius: 12,
              color: "#FFF",
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 0,
              outline: "none",
            }}
          >
            New Search
          </button>
          <button
            className="transition hover:bg-[#222] active:scale-95"
            style={{
              width: 200,
              height: 50,
              border: "1px solid #FFF",
              background: "#2A2A2A",
              borderRadius: 12,
              color: "#FFF",
              fontSize: 16,
              fontWeight: 700,
              outline: "none",
            }}
          >
            Profile
          </button>
        </div>
        {/* Recent search */}
        <div className="flex flex-col" style={{ gap: 10 }}>
          <h4
            style={{
              color: "#CCC",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 0,
              marginLeft: 2,
              marginTop: 0,
            }}
          >
            Recent Search
          </h4>
          {recentQueries.map((rq, i) => (
            <div
              key={i}
              className="flex items-center"
              style={{
                width: 300,
                height: 40,
                background: "#2A2A2A",
                border: "1px solid #FFF",
                borderRadius: 5,
                paddingLeft: 18,
                fontSize: 14,
                color: "#D1D5DB",
                marginBottom: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={rq}
            >
              {rq}
            </div>
          ))}
        </div>
      </div>

      {/* Main content center */}
      <div className="flex flex-col items-center justify-center w-full" style={{ minHeight: "60vh" }}>
        {/* Title */}
        <div className="mb-8 flex flex-col items-center">
          <span
            style={{
              color: "#FFF",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "0.5px",
              lineHeight: 1.13,
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            The People Search Engine for{" "}
            <span
              className={`inline-block`}
              style={{
                position: 'relative',
                width: "auto",
                minWidth: 170,
              }}
            >
              <span
                className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                key={animatedIndex}
                style={{
                  color: "#FFF",
                  fontWeight: 700,
                  fontSize: 36,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  whiteSpace: "nowrap",
                  transition: "opacity 0.5s",
                }}
              >
                {animatedWords[animatedIndex]}
              </span>
            </span>
          </span>
        </div>
        {/* Search bar */}
        <div className="flex items-center w-full justify-center" style={{ gap: 0 }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="People who..."
            style={{
              width: 600,
              height: 50,
              background: "#2A2A2A",
              border: "1px solid #FFF",
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              color: "#FFF",
              fontSize: 16,
              paddingLeft: 24,
              outline: "none",
              borderRight: "none",
              transition: "background 0.2s",
              fontWeight: 500,
            }}
            className="placeholder-[#C5C5C5]"
          />
          <button
            className="transition hover:bg-[#222] active:scale-95"
            style={{
              width: 120,
              height: 50,
              background: "#2A2A2A",
              border: "1px solid #FFF",
              borderLeft: "none",
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
              color: "#FFF",
              fontSize: 14,
              fontWeight: 700,
              outline: "none",
            }}
          >
            Deep Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

