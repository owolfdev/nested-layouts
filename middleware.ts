import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
const botUserAgents = [
  "Google Page Speed Insights", // Example entry, replace with actual User-Agent strings
];
const customMiddleware = (request: any) => {
  const userAgent = request.headers.get("user-agent") || "";

  // Check if the request is from a known bot
  const isBot = botUserAgents.some((botUserAgent) =>
    userAgent.includes(botUserAgent)
  );

  if (isBot) {
    // Bypass auth for bots
    return NextResponse.next();
  }

  authMiddleware({
    publicRoutes: ["/", "/contact"],
  });
};

export default customMiddleware;

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
