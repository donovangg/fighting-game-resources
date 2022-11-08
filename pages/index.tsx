import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {
  const categories = [
    {
      title: "Fundamentals",
      description: "My foosies dawg",
      path: "",
      imgSrc: "",
    },
    {
      title: "Capcom",
      description: "3,2,1 Shoryukenn",
      path: "",
      imgSrc: "",
    },
    {
      id: 1,
      title: "Airdasher",
      description: "Kokonoe Black Hole setups",
      path: "",
      imgSrc: "",
    },
    {
      id: 2,
      title: "French Bread",
      description: "Lord Kamone",
      path: "",
      imgSrc: "",
    },
    {
      id: 3,
      title: "3D Games",
      description: "Check this kbd",
      path: "",
      imgSrc: "",
    },
    {
      id: 4,
      title: "Fundamentals",
      description: "My foosies dawg",
      path: "",
      imgSrc: "",
    },
  ];
  return (
    <Layout>
      <header>
        <h2>A Bunch of Resources for you</h2>
      </header>
      {categories.map((category) => (
        <div key={category.id}>
          <Card />
        </div>
      ))}
    </Layout>
  );
}
