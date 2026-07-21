import { AppShell } from "@/components/app-shell"; import { PageHeading } from "@/components/page-heading"; import { BriefingCard } from "@/components/briefing-card";
export default function TodayPage(){return <AppShell><div className="mx-auto max-w-3xl p-5 sm:p-8"><PageHeading eyebrow="Tuesday, July 15" title="Today" description="Your focused, intentional day."/><BriefingCard/></div></AppShell>}
