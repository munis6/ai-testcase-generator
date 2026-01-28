export async function generateTestCases(requirement: string) {
  const response = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ requirement })
  });

  return response.json();
}

