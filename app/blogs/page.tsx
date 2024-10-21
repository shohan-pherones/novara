import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { blogItems } from "@/constants";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <main>
      <Hero
        image={blogItems[0].cover}
        headline={blogItems[0].title}
        description={blogItems[0].body}
        ctaLabel="Read Full Thread"
        ctaRoute={blogItems[0].url}
        isBlogPage
      />
      <section className="wrapper">
        <SectionTitle title="All Blogs" />
        <div className="grid__container">
          {blogItems.slice(1).map((blog) => (
            <div key={blog.id} className="card bg-base-100 w-full shadow">
              <figure className="w-full h-48">
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <div className="flex gap-5 items-center font-medium">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8">
                        <Image
                          src={blog.author.image}
                          alt={blog.author.name}
                          width={256}
                          height={256}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p>{blog.author.name.split(" ")[0]}</p>
                  </div>
                  <span className="h-4 w-px bg-base-300" />
                  <p>{moment(blog.published_date).format("DD-MM-YYYY")}</p>
                </div>
                <p>{blog.body}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={blog.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Read Full Thread
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;
