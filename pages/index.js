import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

const siteTitle = "About Me";
const selfIntroductino = "My name is Naing Naing Htun";
export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="text-3xl text-blue-500">{selfIntroductino}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="p-[1px]">
        <h2 className="text-2xl font-bold">Blog</h2>
        <ul className="flex flex-col gap-1">
          {posts?.map(({ id, date, title }) => (
            <li className="" key={id}>
              <Link
                href={`/posts/${id}`}
                className="font-semibold text-blue-500"
              >
                {title}
              </Link>
              <br />
              <small className="font-light">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

//pre-fetching data
//runs on the server side, it will never run on the cliend,
//development side = on every request
//production side = at build time
//can only be exported from a page, not from not-pages
export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
