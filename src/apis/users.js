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
