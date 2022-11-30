import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Card from "../components/Card";
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
      <Head>
        <title>FGC Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FGC Resources" />
        <meta property="og:description" content="undefined" />
        <meta
          property="og:image"
          content="https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/assets/yun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMveXVuLmpwZWciLCJpYXQiOjE2Njk4MDMxNTYsImV4cCI6MTk4NTE2MzE1Nn0.ctNVZ7ye4RgieMeFiLGekZGr9r4daElUPwyv_fI4ZJA"
        />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="fighting-game-resources-s5l6.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://fighting-game-resources-s5l6.vercel.app/"
        />
        <meta name="twitter:title" content="FGC Resources" />
        <meta name="twitter:description" content="undefined" />
        <meta
          name="twitter:image"
          content="https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/assets/yun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMveXVuLmpwZWciLCJpYXQiOjE2Njk4MDMxNTYsImV4cCI6MTk4NTE2MzE1Nn0.ctNVZ7ye4RgieMeFiLGekZGr9r4daElUPwyv_fI4ZJA"
        />
      </Head>
      <header className="flex flex-col justify-center items-center py-20">
        <h1 className="text-5xl text-center mb-4">
          Some <span className="text-indigo-500">Fighting Game Resources</span>{" "}
          for you
        </h1>
        <h2 className="text-4xl mb-4 text-center">
          Make sure you have <span className="text-pink-500">Fun!</span>
        </h2>
        <p className="text-2xl">
          Have something cool to{" "}
          <Link href="/login" className="underline">
            submit?
          </Link>
        </p>
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
