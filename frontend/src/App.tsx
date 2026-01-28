import { useState, useRef } from "react";
import { generateTestCases } from "./api/generate";

function App() {
  const [requirement, setRequirement] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!requirement.trim()) return;

    setLoading(true);
    const response = await generateTestCases(requirement);
    setResult(response);
    setLoading(false);

    // Auto-scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleClear = () => {
    setRequirement("");
    setResult(null);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "0 auto"
      }}
    >
      <h2>AI Test Case Generator</h2>
      <p style={{ color: "#555", marginBottom: "15px" }}>
        Enter a requirement or user story, then generate structured test cases.
      </p>

      <textarea
        placeholder="Example: User should be able to log in with valid credentials"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
        style={{
          width: "100%",
          height: "140px",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "14px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          resize: "vertical"
        }}
      />

      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: loading ? "#6c8fd1" : "#007bff",
            color: "white",
            border: "none",
            cursor: loading ? "default" : "pointer",
            borderRadius: "4px"
          }}
        >
          {loading ? "Generating..." : "Generate Test Cases"}
        </button>

        <button
          onClick={handleClear}
          style={{
            padding: "10px 20px",
            background: "#6c757d",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            marginLeft: "10px"
          }}
        >
          Clear
        </button>
      </div>

      {result && (
        <div ref={resultsRef} style={{ marginTop: "20px" }}>
          <h3>Generated Test Cases</h3>

          {result.testCases?.map((tc: any) => (
            <div
              key={tc.id}
              style={{
                background: "#f9f9f9",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
              }}
            >
              <h4 style={{ marginTop: 0, marginBottom: "8px" }}>
                {tc.id}: {tc.title}
              </h4>

              <strong>Steps:</strong>
              <ul style={{ paddingLeft: "20px", marginTop: "5px", marginBottom: "8px" }}>
                {tc.steps.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>

              <strong>Expected Result:</strong>
              <p style={{ marginTop: "5px" }}>{tc.expectedResult}</p>
            </div>
          ))}

          {result.notes && (
            <p style={{ marginTop: "10px", fontStyle: "italic", color: "#555" }}>
              {result.notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

