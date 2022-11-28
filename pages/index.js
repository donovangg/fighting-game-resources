import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Card from '../components/Card'
import { supabase } from "../utils/supabase";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Fundamentals",
    subheader: "My foosies dawg",
    description: "Stuff you must read. Good bookmarks",
    path: "./fundamentals",
    imgSrc: "assets/footsies.gif",
  },
  {
    id: 2,
    title: "Capcom",
    subheader: "3,2,1 Shoryukenn",
    description: "For games like SF6, CVS2, 3S, Mahvel",
    path: "./capcom",
    imgSrc: "assets/capcom.webp",
  },
  {
    id: 3,
    title: "Airdashers",
    subheader: "Kokonoe Black Hole setups",
    description: "Come here for Guilty Gear, BB, P4u",
    path: "./airdashers",
    imgSrc: "assets/mr-dolphin.jpeg",
  },
  {
    id: 4,
    title: "French Bread",
    subheader: "Lord Kamone",
    description: "For Dengeki, Uni, Melty Blood",
    path: "./french-bread",
    imgSrc: "assets/akiha.jpeg",
  },
  {
    id: 5,
    title: "3D Games",
    subheader: "Check this kbd",
    description: "Tekken, Soul Calibur, VF, DOA",
    path: "./3d",
    imgSrc: "assets/3d.png",
  },
  {
    id: 6,
    title: "NRS",
    subheader: "I'm Comin!!!",
    description: "MK and Injustice",
    path: "./nrs",
    imgSrc: "assets/nrs.jpeg",
  },
];

export default function Home() {
  return (
    <Layout>
      <header className="flex flex-col justify-center items-center py-20">
        <h1 className="text-5xl text-center mb-4">Some <span className="text-indigo-500">Fighting Game Resources</span> for you</h1>
        <h2 className="text-4xl mb-4">Make sure you have <span className="text-pink-500">Fun!</span></h2>
        <p className="text-2xl">Have something cool to {" "}
        <Link href="/login">submit?</Link></p>
      </header>
      <div className="flex flex-wrap gap-10 justify-center w-3/4 mx-auto pb-20">
        {categories.map((category) => (
          <div key={category.id}>
            <Card
              title={category.title}
              description={category.description}
              subheader={category.subheader}
              imgSrc={category.imgSrc}
              path={category.path}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
