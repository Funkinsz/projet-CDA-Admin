import { getCurrentAdmin } from "../apis/auth";

export async function adminLoader() {
    return getCurrentAdmin()
}