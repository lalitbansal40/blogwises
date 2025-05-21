import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';
import { IoCall } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-600">
        <div className="space-y-4 col-span-1">
          <div className="text-indigo-600 text-3xl font-bold">Blog Wises</div>
          <p>Making the world a better place through constructing elegant hierarchies.</p>
          <div className="flex space-x-4 pt-4">
            <FaFacebookF className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            <Link href={"https://www.instagram.com/lalitbansal40"}>
              <FaInstagram className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            </Link>
            <Link href={"https://github.com/lalitbansal40"}>
              <FaGithub className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            </Link>
            <Link href={"https://www.linkedin.com/in/lalitbansal40/"}>
              <FaLinkedin className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            </Link>
            <Link href="tel:9664114023">
              <IoCall className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            </Link>

          </div>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-2">Solutions</h3>
          <ul className="space-y-2">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-2">Support</h3>
          <ul className="space-y-2">
            <li>Submit ticket</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © 2025 Blog Wises, Inc. All rights reserved.
      </div>
    </footer>
  );
}
