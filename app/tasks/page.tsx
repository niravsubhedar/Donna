import { AppShell } from "@/components/app-shell"; import { PageHeading } from "@/components/page-heading"; import { TodoList } from "@/components/todo-list";
export default function TasksPage(){return <AppShell><div className="mx-auto max-w-3xl p-5 sm:p-8"><PageHeading eyebrow="Execution" title="Tasks" description="Everything Donna is helping you move forward."/><TodoList/></div></AppShell>}
