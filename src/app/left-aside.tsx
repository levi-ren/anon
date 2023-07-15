import DarkmodeSwitch from "@/components/darkmode-switch";
import Logo from "@/components/logo";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

interface LeftAsideProps {}

export default function LeftAside(props: LeftAsideProps) {
  return (
    <section className="sticky top-0 flex max-h-screen flex-1 flex-col gap-y-2 pb-4 pt-6">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="h-8 w-8 " />
        <h1 className="font-medium">ANON</h1>
      </Link>
      <div className=""></div>
      <DarkmodeSwitch className="" />
      <div className="hidden items-center gap-x-2 text-xs font-semibold text-slate-400 transition-all hover:text-sm hover:text-slate-500">
        <IoSettingsOutline className="h-7 w-7 " />
        SETTINGS
      </div>
    </section>
  );
}
