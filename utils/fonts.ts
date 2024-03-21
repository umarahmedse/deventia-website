import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
export const inter = Inter({ subsets: ["latin"] });

export const euroStyle = localFont({ src: "./fonts/EuroStyleNormal.woff2" });
export const genos = localFont({ src: "./fonts/Genos.ttf" });
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
