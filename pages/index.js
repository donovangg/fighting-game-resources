import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
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
    subheader: "3...2...1 Shoryuken",
    description: "For games like SF, CVS2, 3S, Mahvel",
    path: "./capcom",
    imgSrc: "assets/capcom.webp",
  },
  {
    id: 3,
    title: "Airdashers",
    subheader: "Goodbye Tuesday train",
    description: "Come here for Guilty Gear, BB, P4U",
    path: "./airdashers",
    imgSrc: "assets/mr-dolphin.webp",
  },
  {
    id: 4,
    title: "French Bread",
    subheader: "Lord Kamone",
    description: "For Dengeki, Uni, Melty Blood",
    path: "./french-bread",
    imgSrc: "assets/akiha.webp",
  },
  {
    id: 5,
    title: "3D Games",
    subheader: "Check this kbd",
    description: "Tekken, Soul Calibur, VF, DOA",
    path: "./3d",
    imgSrc: "assets/3d.webp",
  },
  {
    id: 6,
    title: "NRS",
    subheader: "I'm Comin!!!",
    description: "MK and Injustice",
    path: "./nrs",
    imgSrc: "assets/nrs.webp",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Head>
        <title>iTechedThat | FGC Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FGC Resources" />
        <meta property="og:description" content="Fighting game resource hub" />
        <meta
          property="og:image"
          content="https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/assets/yun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMveXVuLmpwZWciLCJpYXQiOjE2Njk4MDMxNTYsImV4cCI6MTk4NTE2MzE1Nn0.ctNVZ7ye4RgieMeFiLGekZGr9r4daElUPwyv_fI4ZJA"
        />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://www.itechedthat.com/"
        />
        <meta property="twitter:url" content="https://www.itechedthat.com/" />
        <meta name="twitter:title" content="FGC Resources" />
        <meta name="twitter:description" content="Fighting game resource hub" />
        <meta
          name="twitter:image"
          content="https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/assets/yun.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMveXVuLmpwZWciLCJpYXQiOjE2Njk4MDMxNTYsImV4cCI6MTk4NTE2MzE1Nn0.ctNVZ7ye4RgieMeFiLGekZGr9r4daElUPwyv_fI4ZJA"
        />
      </Head>
      <header data-testid="test-1">
        <div className="mx-auto  max-w-md flex-col py-14 sm:max-w-2xl sm:px-6  lg:flex lg:items-center lg:pl-0 lg:text-left">
          <h1 className="text-center text-5xl text-gray-100 mb-4 md:text-6xl">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Fighting Game Resources
            </span>{" "}
            for you
          </h1>
          <h2 className="mb-4 text-4xl text-center">
            Find your{" "}
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              {" "}
              throw tech{" "}
            </span>
            fuzzy abare OS
          </h2>
        </div>
      </header>
      <div className="flex flex-wrap gap-12 justify-center w-3/4 mx-auto pb-20">
        {categories.map((category) => (
          <div key={category.id}>
            <Card
            data-testid="home-card"
              title={category.title}
              description={category.description}
              subheader={category.subheader}
              imgSrc={category.imgSrc}
              path={category.path}
            />
          </div>
        ))}
      </div>
      <footer className="mx-auto flex flex-col justify-center w-full max-w-screen-lg px-4 text-xs opacity-75">
        <p className="mx-auto">&copy; {currentYear} hellodonovan </p>
        <div className="flex mx-auto align-center items-center">
          <p>Made with</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#6f32be"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
          <p>and </p>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="text-purple-600 hover:text-pink-600 hover:duration-75"
            rel="noopener"
          >
            NextJS
          </Link>
        </div>
      </footer>
    </Layout>
  );
}
