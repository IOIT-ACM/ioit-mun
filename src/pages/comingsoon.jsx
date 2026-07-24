import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const comingsoon = () => {
  return (
    <Layouts noFooter>
      <div className="mil-404-frame mil-appearance">
        <div className="mil-scale-frame">
          <h1 className="mil-404" data-text="Coming Soon">Coming Soon</h1>
        </div>

        <h5 className="mil-404-text mil-dark mil-mb-60">This section is under construction. Stay tuned!</h5>

        <Link href="/" className="mil-text-center mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space">
          <span>Back to homepage</span>
        </Link>
      </div>
    </Layouts>
  );
};
export default comingsoon;
