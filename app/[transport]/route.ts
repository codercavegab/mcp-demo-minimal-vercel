import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";

const handler = createMcpHandler(
  async (server) => {
    server.tool(
      "greet",
      "Greet a person by name",
      {
        name: z.string().describe("The name of the person to greet"),
      },
      async ({ name }) => ({
        content: [{ type: "text", text: `Hello, ${name}! 👋 Welcome to the minimal MCP demo.` }],
      })
    );
  },
  {
    capabilities: {
      tools: {
        greet: {
          description: "Greet a person by name",
        },
      },
    },
  },
  {
    basePath: "",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
