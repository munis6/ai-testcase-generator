/**
 * MVP-READY STRUCTURE
 *
 * Once you subscribe to GitHub Copilot and obtain your API key,
 * UNCOMMENT the real AI logic block below and remove the placeholder return.
 */

import { copilot } from "./copilotClient";

// -----------------------------
// Types used across the MVP
// -----------------------------
type GeneratedTestCase = {
  id: string;
  title: string;
  steps: string[];
  expectedResult: string;
};

type GenerateTestCasesResult = {
  requirement: string;
  testCases: GeneratedTestCase[];
  notes?: string;
};

// -----------------------------
// Main function
// -----------------------------
export async function generateTestCases(
  requirement: string
): Promise<GenerateTestCasesResult> {

  // ---------------------------------------------------------------
  // REAL AI LOGIC (UNCOMMENT AFTER YOU GET YOUR COPILOT API KEY)
  // ---------------------------------------------------------------
  /*
  const prompt = `
    Generate detailed software test cases for the following requirement:

    Requirement:
    ${requirement}

    Include:
    - Positive test cases
    - Negative test cases
    - Edge cases
    - Security-related test cases
    - Steps
    - Expected results
    - Unique test case IDs

    Return ONLY valid JSON in this structure:
    {
      "testCases": [
        {
          "id": "",
          "title": "",
          "steps": [],
          "expectedResult": ""
        }
      ]
    }
  `;

  const response = await copilot.chat(prompt);

  const parsed = JSON.parse(response.text);

  return {
    requirement,
    testCases: parsed.testCases
  };
  */
  // ---------------------------------------------------------------


  // ---------------------------------------------------------------
  // PLACEHOLDER LOGIC (ACTIVE UNTIL API KEY IS ADDED)
  // ---------------------------------------------------------------
  return {
    requirement,
    testCases: [
      {
        id: "TC_PLACEHOLDER_001",
        title: "Placeholder test case until AI is activated",
        steps: [
          "Subscribe to GitHub Copilot",
          "Add COPILOT_API_KEY to .env",
          "Uncomment the real AI logic in testGenerator.ts"
        ],
        expectedResult: "AI-generated test cases will replace this placeholder"
      }
    ],
    notes: "AI engine not activated yet. Add COPILOT_API_KEY and uncomment real AI logic."
  };
}

