const API_USERS = "/api/auth";

export async function signin(credentials) {
  const response = await fetch("/api/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (response.ok) {
    const responseFromBack = await response.json();
    if (responseFromBack) {
      return responseFromBack;
    } else {
      throw responseFromBack;
    }
  } else {
    throw new Error("Oops error in signin");
  }
}

export async function getCurrentAdmin() {
  const response = await fetch(`${API_USERS}/current`, {
    credentials: "include",
  });
  return await response.json();
}

export async function signout() {
  await fetch(API_USERS + "/admin", {
    method: "DELETE",
  });
}
