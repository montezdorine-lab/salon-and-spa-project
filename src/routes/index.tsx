import { createFileRoute } from "@tanstack/react-router";

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
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/lusora.html"
      title="Lusora"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
