import flywoiIcon from "../assets/f.png"; // Flywoi PNG
import facebookIcon from "../assets/facebook.png"; // Facebook PNG
import twitterIcon from "../assets/twitter.png"; // Twitter PNG

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-center py-8 mt-16 text-sm text-gray-600">
      <p className="text-gray-800 font-medium">
        © 2025 (주)플래너스컴퍼니 All rights reserved.
      </p>
      <p className="mt-1">
        주소: 서울 서초구 서초중앙로2길 35 (서초동, 돈일빌딩) 210호
      </p>

      {/* 전화번호 + 외부 아이콘들 */}
      <p className="mt-1 flex items-center justify-center gap-2">
        전화: 02-6952-0140

        

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
      </p>
    </footer>
  );
}

