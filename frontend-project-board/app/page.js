import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dashboard>
        <ProjectTiles />

        // TERNARY ORPERATOR TO CONDITIONALLY DISPLAY THE FULLPOST - WITH ONCLICK={}
        <FullPost />
      </Dashboard>
    </main>
  );
}
