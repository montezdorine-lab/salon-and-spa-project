import { createFileRoute } from "@tanstack/react-router";

import { LusoraFrame } from "@/components/LusoraFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lusora - Spa & Wellness One-Page Template for Framer" },
      {
        name: "description",
        content:
          "A simple yet elegant spa & wellness template—modern, optimized, and highly customizable for a seamless and stylish online presence.",
      },
    ],
  }),
  component: LusoraFrame,
});
