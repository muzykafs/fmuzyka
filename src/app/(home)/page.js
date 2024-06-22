'use client'
import Image from "next/image";
import '../../styles/pages/home.scss';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <motion.div className="home">
        <h1>Hello World</h1>
      </motion.div>
    </main>
  );
}
