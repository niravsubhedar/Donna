"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false); const router = useRouter(); const path = usePathname();
  useEffect(() => { if (localStorage.getItem("donna-session")) setReady(true); else router.replace(`/login?next=${encodeURIComponent(path)}`); }, [path, router]);
  if (!ready) return <main className="grid min-h-screen place-items-center bg-canvas text-sm text-zinc-500">Opening your workspace…</main>;
  return <>{children}</>;
}
