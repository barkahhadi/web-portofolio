/*
 * Author: Barkah Hadi
 * Email: barkah.hadi@gmail.com
 * Last Modified: Fri Jul 28 2023 7:54:49 PM
 * File: _app.tsx
 * Description: The main entry point for the app.
 */

import type { AppProps } from "next/app";
import wrapper from "@/store";
import type { Page } from "@/types/page";
import "@/styles/globals.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import { notification, ConfigProvider } from "antd";
import { ApplicationState } from "@/store/slice/app";
import enUS from "antd/lib/locale/en_US";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("@/components/loading"), { ssr: false });

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const { notification: notifState }: ApplicationState = useAppSelector(
    (state) => state.app
  );
  useEffect(() => {
    setLoading(false);
  });

  const [notif, notificationContext] = notification.useNotification();

  useEffect(() => {
    if (notifState.open) {
      notif[notifState.type]({
        message: notifState.message,
        description:
          notifState.description !== undefined ? notifState.description : "",
        placement: notifState.placement,
      });
    }
  }, [notifState]);

  return (
    <ConfigProvider
      locale={enUS}
      theme={{
        token: {
          colorPrimary: "#457B9D",
          fontSize: 14,
          fontFamily: "Inter, sans-serif",
          lineHeight: 1,
        },
      }}
    >
      {!isLoading && <Component {...pageProps} />}
      {notificationContext}
    </ConfigProvider>
  );
};

// Attaches the Redux store to the app.
export default wrapper.withRedux(App);
