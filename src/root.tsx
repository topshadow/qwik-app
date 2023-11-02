import { component$, useVisibleTask$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

// import  "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/img/fav.png" type="image/x-icon" />

        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css"
        />

        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" data-theme="dark">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
