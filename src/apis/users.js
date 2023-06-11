const API_USERS = "/api/admin";

export async function getUsers() {
  const response = await fetch(`${API_USERS}/getUsers`);
  const resFromBack = await response.json();
  if (response.ok) {
    return resFromBack;
  } else {
    throw new Error("User fetch error");
  }
}

export async function updateUser(v) {
  const response = await fetch(`${API_USERS}/updateUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(v),
  });
  const responseFromBack = await response.json();
  if (response.ok) {
    return responseFromBack;
  } else {
    throw new Error("Update User API error");
  }
}
