import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { MUIButton } from "~/integrations/react/mui";
import { ButtonServer } from "./_button_server";
import { PrismaClient } from "prisma/prisma-client";

const serverLog = server$(async (id: string) => {
  console.log("hello");
  var client = new PrismaClient();
  client.$use(async (args, next) => {
    console.log("args:", args);
    await next(args);
  });

  var users = await client.user.findMany({ 
    //@ts-ignore
    token: "token 123" ,
    select:{
      name:true
    }
});
  console.log(`users:`, users);
});

export default component$(() => {
  return (
    <>
      <div
        onClick$={async () => {
          var client = new PrismaClient();
          var users = await client.user.findMany({});
          console.log(`users:`, users);
          await serverLog("mui ");
        }}
        style={{ marginBottom: "40px" }}
      >
        <MUIButton variant={"contained"} fullWidth client:load>
          hello
        </MUIButton>
      </div>
      <button
        onClick$={async () => {
          await serverLog("");
        }}
      >
        server button
      </button>
      <ButtonServer
        onClick$={async () => await serverLog("button server")}
      ></ButtonServer>
    </>
  );
});
