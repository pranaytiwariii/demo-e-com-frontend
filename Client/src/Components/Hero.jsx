import img from "/Navbar/log.png";
import Typewriter from "typewriter-effect";
import PropTypes from "prop-types";

function Hero(props) {
  return (
    <div className="flex px-5 sm:py-40 relative lg:pl-40">
      <div className="z-[-20] bg-white gap-5">
        <header className="text-center sm:py-[-40px] lg:text-left py-16">
          <h1 className="text-3xl lg:text-6xl font-bold pb-3">
            Leading Enterprise <br /> Ecommerce Platform in India
          </h1>
          <div className="flex text-2xl bold text-black mt-4">
            <div className="">Build whitelabelled. </div>
            <div className="text-lime-400">
              <Typewriter
                options={{
                  strings: [
                    "B2B Marketplaces",
                    "Hyperlocal Marketplaces",
                    "Multicountry marketplaces",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <p className="text-gray-600 text-2xl mt-4">
            Designed for diverse B2B and B2C business models
          </p>
          <button
            type="button"
            onClick={() => {
              // debug: confirm click fires
              // check browser console for this message
              // then call the passed handler if present
              // eslint-disable-next-line no-console
              console.log("Hero See Cart clicked");
              props.onCartClick && props.onCartClick();
            }}
            aria-label="See Cart"
            style={{ pointerEvents: "auto" }}
            className="bg-lime-400 hover:bg-white hover:text-lime-400 hover:border-lime-400 border rounded-full text-white text-lg font-bold py-4 px-6 mt-8 relative z-[9999]"
          >
            See Cart
            {props.cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {props.cartItemCount}
              </span>
            )}
          </button>
        </header>
      </div>
      <img
        src={img}
        className="hidden lg:block lg:absolute z-[-10] lg:h-[800px] lg:top-[-20px] lg:right-0"
        alt=""
      />
    </div>
  );
}

Hero.propTypes = {
  onCartClick: PropTypes.func,
  cartItemCount: PropTypes.number,
};

Hero.defaultProps = {
  onCartClick: () => {},
  cartItemCount: 0,
};

export default Hero;
