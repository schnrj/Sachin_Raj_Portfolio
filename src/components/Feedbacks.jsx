import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
        {/* Removed unnecessary min height and margin */}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
