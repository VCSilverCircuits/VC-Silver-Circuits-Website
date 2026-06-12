import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Page not found at", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center circuit-bg p-6">
      <motion.div
        className="max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-accent" />
        </div>
        <h1 className="text-6xl font-extrabold gradient-text mb-4">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! Looks like you have stumbled across a non existent conductor.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-medium underline-offset-4 hover:underline transition"
        >
          <Home className="w-5 h-5" />
          Patch me back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
