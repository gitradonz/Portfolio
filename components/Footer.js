import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="p-4 shadow-md flex align-items-center justify-content-center bg-gray-800"
    >
      <span className="text-sm text-gray-500">
        © 2022{' · '}
        Designed by Pablo R{'í'}os ·{' '}
        <a
          href="https://twitter.com/radonzStudio"
          target={'_blank'}
          rel="noreferrer"
          className="hover:underline"
        >
          @radonzStudio
        </a>
      </span>
    </motion.footer>
  );
};

export default Footer;
