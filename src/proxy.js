import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Sessiom: ", session);

//   const isLogeedIn = true;

  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/career"],
};
