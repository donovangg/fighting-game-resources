import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Card from "../components/Card";

const categories = [
  {
    id: 1,
    title: "Fundamentals",
    subheader: "My foosies dawg",
    description: "Stuff you must read. Good bookmarks",
    path: "./capcom",
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
    title: "Airdasher",
    subheader: "Kokonoe Black Hole setups",
    description: "Come here for Guilty Gear, BB, P4u",
    path: "./capcom",
    imgSrc: "assets/mr-dolphin.jpeg",
  },
  {
    id: 4,
    title: "French Bread",
    subheader: "Lord Kamone",
    description: "For Dengeki, Uni, Melty Blood",
    path: "./capcom",
    imgSrc: "assets/akiha.jpeg",
  },
  {
    id: 5,
    title: "3D Games",
    subheader: "Check this kbd",
    description: "Tekken, Soul Calibur, VF, DOA",
    path: "./capcom",
    imgSrc: "assets/3d.png",
  },
  {
    id: 6,
    title: "NRS",
    subheader: "I'm Comin!!!",
    description: "MK and Injustice",
    path: "./capcom",
    imgSrc: "assets/nrs.jpeg",
  },
];

export default function Home() {
  return (
    <Layout>
      <header className="flex flex-col justify-center items-center py-20">
        <h2>A Bunch of DANK Resources for you</h2>
        <p>Yee yee Turn up</p>
      </header>
      <div className="flex flex-wrap gap-6 border-2 justify-center w-3/4 mx-auto pb-20 border-green-400">
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
