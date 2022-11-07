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
      imgSrc: ""
    },
    {
      title: "Capcom",
      description: "3,2,1 Shoryukenn",
      path: "",
      imgSrc: ""
    },
    {
      title: "Airdasher",
      description: "Kokonoe Black Hole setups",
      path: "",
      imgSrc: ""
    },
    {
      title: "French Bread",
      description: "Lord Kamone",
      path: "",
      imgSrc: ""
    },
    {
      title: "3D Games",
      description: "Check this kbd",
      path: "",
      imgSrc: ""
    },
    {
      title: "Fundamentals",
      description: "My foosies dawg",
      path: "",
      imgSrc: ""
    },
  ]
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-xl text-cyan-300">yeeeeet</p>
    </Layout>
  );
}
