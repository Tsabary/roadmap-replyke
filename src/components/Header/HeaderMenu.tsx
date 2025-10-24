import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "../../lib/utils";

export function HeaderMenu() {
  return (
    <NavigationMenu className="text-foreground">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={
              navigationMenuTriggerStyle() +
              " bg-transparent px-2 py-1 lg:px-4 lg:py-2"
            }
          >
            <a href="https://docs.replyke.com">Documentation</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={
              navigationMenuTriggerStyle() +
              " bg-transparent px-2 py-1 lg:px-4 lg:py-2"
            }
          >
            <a href="https://blog.replyke.com">Blog</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={
              navigationMenuTriggerStyle() +
              " bg-transparent px-2 py-1 lg:px-4 lg:py-2"
            }
          >
            <a href="https://roadmap.replyke.com">Roadmap</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={
              navigationMenuTriggerStyle() +
              " bg-transparent px-2 py-1 lg:px-4 lg:py-2"
            }
          >
            <a href="https://support.replyke.com">Support</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="bg-transparent px-2 py-1 lg:px-4 lg:py-2">
            Repositories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[400px] md:w-[500px]">
            <li>
              <NavigationMenuLink asChild>
                <a
                  href="https://github.com/replyke/monorepo"
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    React Clients
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Complete client-side implementation for React and React
                    Native applications. Build engaging social features with
                    ready-to-use components.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://github.com/replyke/express"
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    Express Server
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Backend server implementation using Express.js. Handles
                    authentication, data management, and API endpoints for
                    Replyke integrations.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://github.com/replyke/launch-kit"
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    LaunchKit
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Three complete, ready-to-deploy applications that cover
                    essential SaaS needs: Blog, Roadmap and Support. Clone and
                    launch your SaaS quickly.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
