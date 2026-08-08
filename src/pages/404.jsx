import Layouts from "@/src/layouts/Layouts";
import SpecularButton from "@components/ui/SpecularButton";

const E404 = () => {
  return (
    <Layouts noFooter>
      {/* 404 */}
      <div className="mil-404-frame mil-appearance">

          <div className="mil-scale-frame">
              <h1 className="mil-404" data-text="404">404</h1>
          </div>

          <h5 className="mil-404-text mil-dark mil-mb-60">Oops! Something went wrong :(</h5>

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
      {/* 404 end */}
    </Layouts>
  );
};
export default E404;
