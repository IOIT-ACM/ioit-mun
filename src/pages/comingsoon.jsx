import Layouts from "@/src/layouts/Layouts";
import SpecularButton from "@components/ui/SpecularButton";

const comingsoon = () => {
  return (
    <Layouts noFooter>
      <div className="mil-404-frame mil-appearance">
        <div className="mil-scale-frame">
          <h1 className="mil-404" data-text="Coming Soon">Coming Soon</h1>
        </div>

        <h5 className="mil-404-text mil-dark mil-mb-60">This section is under construction. Stay tuned!</h5>

        <SpecularButton
          href="/"
          className="mil-scale-down-trigger"
          size="lg"
          radius={8}
          tint="#D4A43A"
          tintOpacity={0.92}
          textColor="#0B0F14"
          lineColor="#FFF6DE"
          baseColor="#8A6A22"
          shineSize={14}
          shineFade={45}
          thickness={1.5}
          speed={0.3}
          followMouse
          proximity={260}
        >
          Back to homepage
        </SpecularButton>
      </div>
    </Layouts>
  );
};
export default comingsoon;
