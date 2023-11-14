import {
  component$,
  useVisibleTask$,
  useStore,
  useStylesScoped$,
  useSignal,
} from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";
import styles from "./flower.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
 var enter= useSignal(false);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 90,
  });

  useVisibleTask$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class="container container-center" onMouseEnter$={()=>enter.value=true}  onMouseLeave$={()=>enter.value=false}>
      {/* <div role="presentation" class="ellipsis"></div>
      <h1>
        <span class="highlight">Generate</span> Flowers
      </h1> */}
      

      {enter.value&&<input
      style={{position:'fixed',top:0}}
        class="input"
        type="range"
        value={state.number}
        max={100}
        onInput$={(ev) => {
          state.number = (ev.target as HTMLInputElement).valueAsNumber;
        }}
      />}
      <div
        style={{
          "--state": `${state.count * .1}`,
          height:'100vh'
        }}
        class={{
          host: true,
          pride: loc.url.searchParams.get("pride") === "true",
        }}
      >
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            class={{
              square: true,
              odd: i % 2 === 0,
            }}
            style={{ "--index": `${i + 1}` }}
          />
        )).reverse()}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
