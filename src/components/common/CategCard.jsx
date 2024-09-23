import { useState } from "react";
import { motion } from "framer-motion";

import theme from "../../theme";

const CategCard = ({ title, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        height: isHovered ? "300px" : "200px", // Grow taller on hover
        width: isHovered ? "300px" : "200px", // Keep width fixed to maintain circle-like shape
        borderRadius: isHovered ? "20px" : "50%", // Change shape from circle to rounded rect
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "relative",
        backgroundColor: theme.palette.fourth.main, // Circle background color
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      {!isHovered && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            color: theme.palette.primary.main,
            fontSize: "1.5rem",
            zIndex: 1,
            ...theme.typography.kalam,
          }}
        >
          {title}
        </motion.div>
      )}

      {/* Image */}
      {isHovered && (
        <motion.img
          src={src}
          alt="Hover Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}
    </motion.div>
  );
};

export default CategCard;
