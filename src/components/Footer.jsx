import { Link } from "react-router-dom";
import flywoiIcon from "../assets/f.png"; // Flywoi PNG
import facebookIcon from "../assets/facebook.png"; // Facebook PNG
import twitterIcon from "../assets/twitter.png"; // Twitter PNG

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-center py-6 mt-16 text-[10px] text-gray-600">
      
      {/* 주소 */}
      <p className="mt-1 text-[10px]">
        210, Donil Building, 35, Seochojungang-ro 2-gil, Seocho-gu, Seoul
      </p>

      {/* 전화번호 + 아이콘을 한 줄에 배치 */}
      <div className="mt-1 flex items-center justify-center gap-2">
        <span>02-6952-0140</span>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            className="h-4 w-4 object-contain hover:opacity-80 transition"
          />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitterIcon}
            alt="Twitter"
            className="h-4 w-4 object-contain hover:opacity-80 transition"
          />
        </a>

        {/* Flywoi */}
        <a
          href="https://flywoi.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={flywoiIcon}
            alt="Flywoi"
            className="h-4 w-4 object-contain hover:opacity-80 transition"
          />
        </a>
      </div>

      {/* 이용약관 / 개인정보처리방침 링크 */}
      <div className="mt-2 flex justify-center gap-4 text-[10px]">
        <Link
          to="/terms"
          className="hover:underline text-gray-600"
        >
          이용약관
        </Link>
        <Link
          to="/privacy"
          className="hover:underline text-gray-600"
        >
          개인정보처리방침
        </Link>
      </div>

      {/* 저작권 */}
      <p className="text-gray-800 font-medium text-[12px] mt-2">
        © 2025 PLANNERSCOM. All rights reserved.
      </p>
    </footer>
  );
}

