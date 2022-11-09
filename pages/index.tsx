import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {
  const categories = [
    {
      id: 1,
      title: "Fundamentals",
      description: "My foosies dawg",
      path: "",
      imgSrc: "assets/footsies.gif",
    },
    {
      id: 2,
      title: "Capcom",
      description: "3,2,1 Shoryukenn",
      path: "",
      imgSrc: "assets/capcom.webp",
    },
    {
      id: 3,
      title: "Airdasher",
      description: "Kokonoe Black Hole setups",
      path: "",
      imgSrc: "assets/mr-dolphin.jpeg",
    },
    {
      id: 4,
      title: "French Bread",
      description: "Lord Kamone",
      path: "",
      imgSrc: "assets/akiha.jpeg",
    },
    {
      id: 5,
      title: "3D Games",
      description: "Check this kbd",
      path: "",
      imgSrc: "assets/3d.png",
    },
    {
      id: 6,
      title: "NRS",
      description: "I'm Comin!!!",
      path: "",
      imgSrc: "assets/nrs.jpeg",
    },
  ];
  return (
    <Layout>
      <header className="flex flex-col justify-center items-center">
        <h2>A Bunch of DANK Resources for you</h2>
        <p>Yee yee Turn up</p>
      </header>
      <div className="flex flex-wrap gap-6 border-2 border-green-400">
        {categories.map((category) => (
          <div key={category.id}>
            <Card
              title={category.title}
              description={category.description}
              imgSrc={category.imgSrc}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
