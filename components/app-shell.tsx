import { AuthGuard } from "@/components/auth-guard";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
export function AppShell({ children }: { children: React.ReactNode }) { return <AuthGuard><main className="noise flex min-h-screen bg-[#0a0a0c]"><Sidebar /><div className="min-w-0 flex-1"><Header />{children}</div></main></AuthGuard>; }
