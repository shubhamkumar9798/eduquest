"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // clears user + localStorage
    router.push("/auth/login"); // redirect to login
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto w-full">
        {/* Logo Section - Left */}
        <Link href="/dashboard" className="flex items-center space-x-3">
          <Image
            src="/eduqu1.png"
            alt="EduQuest Logo"
            width={180}
            height={60}
            className="object-contain drop-shadow-lg cursor-pointer"
          />
        </Link>

        {/* Navigation Menu - Right */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/dashboard"
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://mpo3.mypowerworld.com/vr/"
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                VR Lab
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={`https://eduquest-car.vercel.app?user=${encodeURIComponent(
                  user?.email || ""
                )}`}
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                Course World
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-red-300 hover:text-red-200 hover:bg-red-500/20 rounded-lg transition-all duration-200"
              >
                Logout
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
