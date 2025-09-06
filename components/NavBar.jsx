"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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
        <div className="flex items-center space-x-3">
          <Image
            src="/saklogo1.png"
            alt="Saksham Logo"
            width={120}
            height={40}
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Navigation Menu - Right */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 border-0 backdrop-blur-sm">
                Dashboard
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl">
                <div className="p-4 space-y-2 min-w-[200px]">
                  <NavigationMenuLink 
                    href="/dashboard"
                    className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                  >
                    Overview
                  </NavigationMenuLink>
                  <NavigationMenuLink 
                    href="/dashboard/stats"
                    className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                  >
                    Stats
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/profile"
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Profile
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/settings"
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>

             <NavigationMenuItem>
              <NavigationMenuLink 
                href="https://mpo3.mypowerworld.com/vr/"
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                VR Lab
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                onClick={handleLogout}
                className="px-3 py-2 text-red-300 hover:text-red-200 hover:bg-red-500/20 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Logout
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
