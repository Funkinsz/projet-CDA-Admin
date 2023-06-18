const API = "/api/admin";

export async function getStyles() {
  const response = await fetch(API + "/getStyles");
  const resFromBack = await response.json();
  if (response.ok) {
    return resFromBack;
  } else {
    throw new Error("Style fetch error");
  }
}

export async function updateStyle(v) {
  const response = await fetch(API + "/updateStyle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(v),
  });
  const resFromBack = await response.json();
  if (response.ok) {
    return resFromBack;
  } else {
    throw new Error("Update Style API error");
  }
}

export async function addStyle(v) {
  console.log(v);

  const response = await fetch(API + "/addStyle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: v }),
  });
  const resFromBack = await response.json();
  if (response.ok) {
    return resFromBack;
  } else {
    throw new Error("Add Style API error");
  }
}
