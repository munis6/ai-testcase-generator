// This file receives the text that the user types in the App.tsx (frontend textarea),
// App.tsx owns the textarea, and useState() saves the user’s text into the requirement variable.
// and when the user clicks the Generate Test Cases button, App.tsx sends that text here.
// This file then sends the text to the backend server to generate test cases,
// and returns the backend’s reply back to App.tsx.
// It works as a small helper that connects the frontend UI to the backend API.
export async function generateTestCases(requirement: string) {
  console.log("Calling backend with:", requirement);

  try {
    const backendCall = await fetch(process.env.REACT_APP_API_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ requirement })
    });

    return backendCall.json();
  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }
}


