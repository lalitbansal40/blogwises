import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
type BlogPost = {
  title: string;
  description: string;
  imageurl?: string;
  category?: string;
  _id: string;
  blogid: string;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: `Blog Wises`,
  };
}

export default function HomePage() {
  const images = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",
    "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",
    "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
  ]

  const BlogImage: BlogPost[] = [
    {
      _id: "67e8ff90ffc36c0471e0951f",
      title: "Introduction to Web Development: Learn HTML, CSS & JavaScript for Beginners",
      description: "Discover the fundamentals of web development in this beginner-friendly course. Learn how to build websites using HTML, CSS, and JavaScript. Whether you're starting from scratch or exploring a new career path, this guide will help you gain essential coding skills and confidently start your web development journey.",
      imageurl: "https://lalitbansal2004.s3.us-east-1.amazonaws.com/bloglistimages/webdevelopment.jpg",
      category: "Programming",
      blogid: "67e8ff46ffc36c0471e09514"
    },
    {
      _id: "67e8ff90ffc36c0471e09520",
      title: "Mastering JavaScript Fundamentals: The Complete Beginner-to-Advanced Guide (2025)",
      description: "Master JavaScript fundamentals with this complete beginner-to-advanced guide for 2025. Learn core concepts, syntax, and real-world applications of JavaScript. Perfect for beginners and aspiring web developers. Start coding interactive websites today with easy tutorials, practical examples, and expert tips to boost your web development skills fast.",
      imageurl: "https://lalitbansal2004.s3.us-east-1.amazonaws.com/bloglistimages/javascript.jpg",
      category: "Programming",
      blogid: "67e8ff46ffc36c0471e09515"
    },
    {
      _id: "67e8ff90ffc36c0471e09521",
      title: "Mastering CSS Flexbox in 2025: The Only Guide You'll Ever Need",
      description: "Mastering CSS Flexbox in 2025: The Only Guide You'll Ever Need is your ultimate resource to learn modern responsive web design. Discover how Flexbox works with real-world examples, pro tips, and step-by-step tutorials. Perfect for beginners and pros looking to master CSS layouts in 2025 and beyond.",
      imageurl: "https://lalitbansal2004.s3.us-east-1.amazonaws.com/bloglistimages/css_flex_box.png",
      category: "Web Design",
      blogid: "67e8ff46ffc36c0471e09516"
    },
  ]
  function truncateWords(text: string, maxWords: number): string {
    const words = text?.split(' ');
    return words?.length > maxWords
      ? words.slice(0, maxWords).join(' ') + '...'
      : text;
  }

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero */}
      <section className="py-12 px-6 text-center bg-gradient-to-r ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Read, Explore, and Get Inspired
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Dive into carefully curated articles that spark your curiosity, broaden your horizons, and fuel your creativity—no uploads needed, just pure inspiration waiting for you.
        </p>

        {/* Images Grid */}
        <div className="mt-10 grid grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto justify-center">
          {images.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <Image
                src={item}
                alt={`Gallery ${i + 1}`}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Our mission</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-12">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div>
            <h3 className="text-2xl font-bold">44 million</h3>
            <p className="text-gray-500">Transactions every 24 hours</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">$119 trillion</h3>
            <p className="text-gray-500">Assets under holding</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">46,000</h3>
            <p className="text-gray-500">New users annually</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            ['Be world-class', 'Lorem ipsum dolor sit amet consectetur.'],
            ['Always learning', 'Ut enim ad minim veniam quis nostrud exercitation.'],
            ['Share everything you know', 'Duis aute irure dolor in reprehenderit.'],
            ['Be supportive', 'Velit esse cillum dolore eu fugiat nulla pariatur.'],
          ].map(([title, desc]) => (
            <div key={title}>
              <h4 className="font-semibold text-xl mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-6 bg-white text-center">
        <h3 className="text-sm uppercase text-gray-500 mb-6">Trusted by the world’s most innovative teams</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {['Transistor', 'Reform', 'Tuple', 'SavvyCal', 'Statamic'].map((name) => (
            <span key={name} className="text-gray-700 font-medium text-lg">
              {name}
            </span>
          ))}
        </div>
      </section>


      {/* Blog */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">From the blog</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BlogImage.map((post) => (
            <Link href={`blog/${post.blogid}`} key={post._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:cursor-pointer ">
              <div className="h-48 w-full relative">
                <Image
                  src={post?.imageurl || ""}
                  alt={post?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 flex items-center space-x-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {post?.category}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {post?.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {truncateWords(post.description, 18)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
