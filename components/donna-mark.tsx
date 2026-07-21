import { cn } from "@/lib/utils";
export function DonnaMark({ className }: { className?: string }) { return <div className={cn("grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-br from-violet-300 via-violet-500 to-indigo-600 shadow-lg shadow-violet-900/30", className)}><span className="text-sm font-semibold tracking-tighter text-white">D</span></div>; }
