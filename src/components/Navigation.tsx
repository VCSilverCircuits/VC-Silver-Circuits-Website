import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/into-the-deep", label: "Robots" },
    { href: "/media", label: "Media" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact/Donate" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";

    if (path === "/team") {
      return location.pathname.startsWith("/team") || location.pathname.startsWith("/portfolio");
    }

    if (path === "/into-the-deep") {
      return (
        location.pathname.startsWith("/into-the-deep") ||
        location.pathname.startsWith("/center-stage-robot") ||
        location.pathname.startsWith("/power-play-robot")
      );
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">VC Silver Circuits</div>
            <div className="text-sm text-muted-foreground hidden sm:block">#16158</div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.label === "Robots" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <Button variant={isActive(item.href) ? "default" : "ghost"}>
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <Link to="/decode-robot">2025-2026 Decode</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/into-the-deep">2024-2025 Into The Deep</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/center-stage-robot">2023-2024 Center Stage</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/power-play-robot">2022-2023 Power Play</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.label === "Team" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <Button variant={isActive(item.href) ? "default" : "ghost"}>
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <Link to="/team">Our Members</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/portfolio">Past Seasons</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/sponsors">Sponsors</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={item.href} variant={isActive(item.href) ? "default" : "ghost"} asChild>
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              )
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) =>
                item.label === "Robots" ? (
                  <div key={item.href} className="flex flex-col">
                    <Button 
                      variant={isActive(item.href) ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setRobotsOpen(!robotsOpen)}
                    >
                      {item.label}
                    </Button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        robotsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 flex flex-col space-y-1 pt-1">
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/decode-robot" onClick={() => setIsOpen(false)}>
                            2025-2026 DECODE
                          </Link>
                        </Button>
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/into-the-deep" onClick={() => setIsOpen(false)}>
                            2024-2025 Into The Deep
                          </Link>
                        </Button>
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/center-stage-robot" onClick={() => setIsOpen(false)}>
                            2023-2024 Center Stage
                          </Link>
                        </Button>
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/power-play-robot" onClick={() => setIsOpen(false)}>
                            2022-2023 Power Play
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : item.label === "Team" ? (
                  <div key={item.href} className="flex flex-col">
                    <Button 
                      variant={isActive(item.href) ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setTeamOpen(!teamOpen)}
                    >
                      {item.label}
                    </Button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        teamOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 flex flex-col space-y-1 pt-1">
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/team" onClick={() => setIsOpen(false)}>
                            Our Members
                          </Link>
                        </Button>
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/portfolio" onClick={() => setIsOpen(false)}>
                            Past Seasons
                          </Link>
                        </Button>
                        <Button variant="ghost" className="justify-start" asChild>
                          <Link to="/sponsors" onClick={() => setIsOpen(false)}>
                            Sponsors
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="justify-start"
                    asChild
                  >
                    <Link to={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  </Button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
