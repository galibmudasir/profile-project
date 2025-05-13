import { motion } from "framer-motion";

const AnimatedDiv = ({
  animation = "fade-up",
  children,
  className,
  ...props
}) => {
  const animations = {
    "fade-up": {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { opacity: 0 },
    },
    "fade-down": {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { opacity: 0 },
    },
    "fade-left": {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { opacity: 0 },
    },
    "fade-right": {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { opacity: 0 },
    },
  };

  const transition = { duration: 2 }; // Default transition
  const selectedAnimation = animations[animation] || animations["fade-up"];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
