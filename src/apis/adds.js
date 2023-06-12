const API = "/api/admin";

export async function getAdds() {
  const response = await fetch(API + "/getAdds");
  const responseFromBack = await response.json();
  if (response.ok) {
    return responseFromBack;
  } else {
    throw new Error("Adds fetch error");
  }
}

export async function updateAdd(v) {
  const response = await fetch(API + "/updateAdd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  const responseFromBack = await response.json();
  if (response.ok) {
    return responseFromBack;
  } else {
    throw new Error("Update Adds API error");
  }
}

export async function deleteAdd(v) {
    const response = await fetch(API+"/deleteAdd")
    const responseFromBack = await response.json()
    if (response.ok) {
        return responseFromBack
    } else {
        throw new Error ("Delete Add API error")
    }
}