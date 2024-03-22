import Image from "next/image";
import SideNav from "@/components/SideNav";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";


export default function Home() {
  return (
    <main className="grid grid-cols-4 min-h-screen gap-5">
      <SideNav />
      <div className="col-span-3 grid grid-cols-3 w-full gap-5">
        <div className="col-span-2">
          <h2>Discussion Forum</h2>
          <DiscussionForum/>
        </div>
        <div className="col-span-1">
          <h2>Market Stories</h2>
          <MarketStories/>
        </div>

      </div>
    </main>
  );
}
