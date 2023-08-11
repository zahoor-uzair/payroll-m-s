import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userService } from "@/components/user";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  function authCheck(url: any) {
    // redirect to login page if accessing a private page and not logged in

    const publicPaths = ["/account/login", "/account/signup"];
    const path = url.split("?")[0];

    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/account/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  useEffect(() => {
    authCheck(router.asPath);
    console.log(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <ThemeProvider theme={customTheme}>
      {authorized && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
