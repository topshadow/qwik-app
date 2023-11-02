import { Slot, component$, useSignal, $ } from "@builder.io/qwik";
import {
  ProLayout$,
  ProConfigProvider$,
  ConfigProvider$,
} from "~/integrations/react/pro-component/index";

export function LayoutIndex() {
  const getTargetContainer = $(() => {
    return document.getElementById("test-pro-layout") || document.body;
  });
  return (
    <>
      <div
        id="test-pro-layout"
        style={{
          height: "100vh",
          overflow: "auto",
        }}
      >
        <ProConfigProvider$ hashed={false} client:load>
          <ConfigProvider$ getTargetContainer={getTargetContainer} client:load>
            <ProLayout$ client:load>
              <Slot></Slot>
            </ProLayout$>
          </ConfigProvider$>
        </ProConfigProvider$>
      </div>
    </>
  );
}

export default component$(LayoutIndex);
