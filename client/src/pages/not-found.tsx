import { Card, CardContent } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* Soft Ambient Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-yellow-600/10 rounded-full blur-[130px]"></div>

      <Card className="w-full max-w-lg mx-4 bg-[#0e0e0e]/90 backdrop-blur-xl border border-yellow-400/10 shadow-[0_0_25px_rgba(255,215,0,0.08)]">
        <CardContent className="pt-10 pb-12 text-center">

          {/* Title Section */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <TriangleAlert className="h-10 w-10 text-yellow-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
            <h1 className="text-3xl font-semibold tracking-tight">
              Page Not Found
            </h1>
          </div>

          {/* Professional Subtitle */}
          <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
            The page you're trying to access doesn’t exist or may have been moved.
            <br />
            Please verify the URL or return to the homepage.
          </p>

          {/* Return Home Button */}
          <Link href="/" className="block mt-8">
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all">
              Return to Homepage
            </div>
          </Link>

          {/* Professional Credit */}
          <div className="mt-10 text-[12px] text-gray-500 tracking-wide">
            Designed & Engineered by <span className="text-yellow-500">Taha Munim</span>
          </div>

          {/* Keyboard Easter Egg – “T” */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener("keydown", (e) => {
                  if (e.key === "t" || e.key === "T") {
                    alert("Developer Tools: Access Granted.\\nWelcome, Taha.");
                  }
                });
              `,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
