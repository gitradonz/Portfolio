import { motion } from "framer-motion";
const MacbookPro = ({ image }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, margin: -120 }}
      className="section section-device"
    >
      <div id="macbook-pro" className="container grid-xl text-center">
        <div className="columns">
          <div className="column col-12">
            <div className="dots">
              <div
                className="dot tooltip"
                data-tooltip="device-silver (default)"
              ></div>
              <div class="dot tooltip" data-tooltip="device-spacegray"></div>
            </div>
          </div>
          <div class="column col-12">
            <div class="device device-macbook-pro device-spacegray">
              <div class="device-frame">
                <img class="device-content" src={image} alt="macbook-pro" />
              </div>
              <div class="device-stripe"></div>
              <div class="device-header"></div>
              <div class="device-sensors"></div>
              <div class="device-btns"></div>
              <div class="device-power"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MacbookPro;
