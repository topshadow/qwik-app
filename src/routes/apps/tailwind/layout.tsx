import { Slot, component$ } from "@builder.io/qwik";
import {
  Link,
  RequestHandler,
  routeAction$,
  routeLoader$,
  server$,
} from "@builder.io/qwik-city";
// import "~/styles/app.sass";
import "~/global.css";
import { Image } from "qwik-image";
// export const onGet: RequestHandler = ({ json, cookie }) => {
//   cookie.set("token", "mytoken");
//   // json(200, { message: "Hello World" });
//   return <DefaultLayout></DefaultLayout>
// };

const useLogin = server$(async function () {
  debugger;
  console.log(this.cookie.get("token")?.value);
  this.cookie.set("token", "mytoken");
  return { ok: true };
});
export function Navbar() {
  return (
    <>
      {/* start navbar */}
      <div class="flex flex-row flex-wrap items-center border-b border-gray-300 bg-white p-6 md:fixed md:top-0 md:z-20 md:w-full">
        {/* logo */}
        <div class="flex w-56 flex-none flex-row items-center">
          <img src="/img/logo.png" class="w-10 flex-none" loading="lazy" />
          <strong class="ml-1 flex-1 capitalize">cleopatra</strong>
          <button
            id="sliderBtn"
            class="hidden flex-none text-right text-gray-900 md:block"
          >
            <i class="fad fa-list-ul" />
          </button>
        </div>
        {/* end logo */}
        {/* navbar content toggle */}
        <button id="navbarToggle" class="right-0 mr-6 hidden md:fixed md:block">
          <i class="fad fa-chevron-double-down" />
        </button>
        {/* end navbar content toggle */}
        {/* navbar content */}
        <div
          id="navbar"
          class="animated flex flex-1 flex-row flex-wrap items-center justify-between pl-3 md:fixed md:left-0 md:top-0 md:mt-16 md:hidden md:w-full md:flex-col md:items-center md:border-b md:border-t md:border-gray-200 md:bg-white md:p-10"
        >
          {/* left */}
          <div class="text-gray-600 md:mb-10 md:flex md:w-full md:flex-row md:justify-evenly md:border-b md:border-gray-200 md:pb-10">
            <Link
              href="apps/tailwind/email"
              class="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
            >
              <i class="fad fa-envelope-open-text" />
            </Link>
            <a
              class="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i class="fad fa-comments-alt" />
            </a>
            <a
              class="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i class="fad fa-check-circle" />
            </a>
            <a
              class="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i class="fad fa-calendar-exclamation" />
            </a>
          </div>
          {/* end left */}
          {/* right */}
          <div class="flex flex-row-reverse items-center">
            {/* user */}
            <div class="dropdown relative md:static">
              <button class="menu-btn focus:shadow-outline flex flex-wrap items-center focus:outline-none">
                <div class="h-8 w-8 overflow-hidden rounded-full">
                  <img
                    class="h-full w-full object-cover"
                    src="/img/user.svg"
                    loading="lazy"
                  />
                </div>
                <div class="ml-2 flex capitalize ">
                  <h1 class="m-0 p-0 text-sm font-semibold leading-none text-gray-800">
                    moeSaid
                  </h1>
                  <i class="fad fa-chevron-down ml-2 text-xs leading-none" />
                </div>
              </button>
              <button class="menu-overflow fixed left-0 top-0 z-10 hidden h-full w-full" />
              <div class="menu animated faster absolute right-0 z-20 mt-5 hidden w-40 rounded bg-white py-2 text-gray-500 shadow-md md:mt-10 md:w-full">
                {/* item */}
                <a
                  class="block bg-white px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900"
                  href="#"
                >
                  <i class="fad fa-user-edit mr-1 text-xs" />
                  edit my profile
                </a>
                {/* end item */}
                {/* item */}
                <a
                  class="block bg-white px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900"
                  href="#"
                >
                  <i class="fad fa-inbox-in mr-1 text-xs" />
                  my inbox
                </a>
                {/* end item */}
                {/* item */}
                <a
                  class="block bg-white px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900"
                  href="#"
                >
                  <i class="fad fa-badge-check mr-1 text-xs" />
                  tasks
                </a>
                {/* end item */}
                {/* item */}
                <a
                  class="block bg-white px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900"
                  href="#"
                >
                  <i class="fad fa-comment-alt-dots mr-1 text-xs" />
                  chats
                </a>
                {/* end item */}
                <hr />
                {/* item */}
                <a
                  class="block bg-white px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-900"
                  href="#"
                >
                  <i class="fad fa-user-times mr-1 text-xs" />
                  log out
                </a>
                {/* end item */}
              </div>
            </div>
            {/* end user */}
            {/* notifcation */}
            <div class="dropdown relative mr-5 md:static">
              <button class="menu-btn m-0 p-0 text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                <i class="fad fa-bells" />
              </button>
              <button class="menu-overflow fixed left-0 top-0 z-10 hidden h-full w-full" />
              <div class="menu animated faster absolute right-0 z-20 mt-5 hidden w-84 rounded bg-white py-2 shadow-md md:right-0 md:w-full">
                {/* top */}
                <div class="flex flex-row items-center justify-between px-4 py-2 text-sm font-semibold capitalize">
                  <h1>notifications</h1>
                  <div class="rounded border border-teal-200 bg-teal-100 px-1 text-xs text-teal-500">
                    <strong>5</strong>
                  </div>
                </div>
                <hr />
                {/* end top */}
                {/* body */}
                {/* item */}
                <a
                  class="block flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2">
                    <i class="fad fa-birthday-cake text-sm" />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">poll..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>4 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />
                {/* end item */}
                {/* item */}
                <a
                  class="block flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2">
                    <i class="fad fa-user-circle text-sm" />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">mohamed..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>78 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />
                {/* end item */}
                {/* item */}
                <a
                  class="block flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2">
                    <i class="fad fa-images text-sm" />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">new imag..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>65 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />
                {/* end item */}
                {/* item */}
                <a
                  class="block flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 rounded border border-gray-300 bg-gray-100 px-3 py-2">
                    <i class="fad fa-alarm-exclamation text-sm" />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">time is up..</h1>
                      <p class="text-xs text-gray-500">text here also</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>1 min ago</p>
                    </div>
                  </div>
                </a>
                {/* end item */}
                {/* end body */}
                {/* bottom */}
                <hr />
                <div class="mt-2 px-4 py-2">
                  <a
                    href="#"
                    class="block rounded border border-gray-300 p-1 text-center text-xs uppercase transition-all duration-500 ease-in-out hover:text-teal-500"
                  >
                    view all
                  </a>
                </div>
                {/* end bottom */}
              </div>
            </div>
            {/* end notifcation */}
            {/* messages */}
            <div class="dropdown relative mr-5 md:static">
              <button class="menu-btn m-0 p-0 text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                <i class="fad fa-comments" />
              </button>
              <button class="menu-overflow fixed left-0 top-0 z-10 hidden h-full w-full" />
              <div class="menu animated faster absolute right-0 z-20 mt-5 hidden w-84 rounded bg-white py-2 shadow-md md:right-0 md:w-full">
                {/* top */}
                <div class="flex flex-row items-center justify-between px-4 py-2 text-sm font-semibold capitalize">
                  <h1>messages</h1>
                  <div class="rounded border border-teal-200 bg-teal-100 px-1 text-xs text-teal-500">
                    <strong>3</strong>
                  </div>
                </div>
                <hr />
                {/* end top */}
                {/* body */}
                {/* item */}
                <a
                  class="block flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
                    <img
                      class="h-full w-full object-cover"
                      src="/img/user1.jpg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">mohamed said</h1>
                      <p class="text-xs text-gray-500">yeah i know</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>4 min ago</p>
                    </div>
                  </div>
                </a>
                <hr />
                {/* end item */}
                {/* item */}
                <a
                  class=" flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
                    <img
                      class="h-full w-full object-cover"
                      src="/img/user2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">sull goldmen</h1>
                      <p class="text-xs text-gray-500">for sure</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>1 day ago</p>
                    </div>
                  </div>
                </a>
                <hr />
                {/* end item */}
                {/* item */}
                <a
                  class=" flex flex-row items-center justify-start bg-white px-4 py-4 text-sm font-medium capitalize tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-200"
                  href="#"
                >
                  <div class="mr-3 h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-gray-100">
                    <img
                      class="h-full w-full object-cover"
                      src="/img/user3.jpg"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div class="flex-rowbg-green-100 flex flex-1">
                    <div class="flex-1">
                      <h1 class="text-sm font-semibold">mick</h1>
                      <p class="text-xs text-gray-500">is typing ....</p>
                    </div>
                    <div class="text-right text-xs text-gray-500">
                      <p>31 feb</p>
                    </div>
                  </div>
                </a>
                {/* end item */}
                {/* end body */}
                {/* bottom */}
                <hr />
                <div class="mt-2 px-4 py-2">
                  <a
                    href="#"
                    class="block rounded border border-gray-300 p-1 text-center text-xs uppercase transition-all duration-500 ease-in-out hover:text-teal-500"
                  >
                    view all
                  </a>
                </div>
                {/* end bottom */}
              </div>
            </div>
            {/* end messages */}
          </div>
          {/* end right */}
        </div>
        {/* end navbar content */}
      </div>
      {/* end navbar */}
    </>
  );
}

function Sidebar() {
  return (
    <>
      {/* start sidebar */}
      <div
        id="sideBar"
        class="animated faster relative flex w-64 flex-none flex-col flex-wrap border-r border-gray-300 bg-white p-6 md:fixed md:top-0 md:z-30 md:-ml-64 md:h-screen md:shadow-xl"
      >
        {/* sidebar content */}
        <div class="flex flex-col">
          {/* sidebar toggle */}
          <div class="mb-4 hidden text-right md:block">
            <button id="sideBarHideBtn">
              <i class="fad fa-times-circle" />
            </button>
          </div>
          {/* end sidebar toggle */}
          <p class="mb-4 text-xs uppercase tracking-wider text-gray-600">
            homes
          </p>
          {/* link */}
          <Link
            href="/apps/tailwind/report"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-chart-pie mr-2 text-xs" />
            Analytics dashboard
          </Link>
          {/* end link */}
          {/* link */}
          <a
            href="./index-1.html"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-shopping-cart mr-2 text-xs" />
            ecommerce dashboard
          </a>
          {/* end link */}
          <p class="mb-4 mt-4 text-xs uppercase tracking-wider text-gray-600">
            apps
          </p>
          {/* link */}
          <Link
            href="/apps/tailwind/email"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-envelope-open-text mr-2 text-xs" />
            email
          </Link>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-comments mr-2 text-xs" />
            chat
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-shield-check mr-2 text-xs" />
            todo
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-calendar-edit mr-2 text-xs" />
            calendar
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-file-invoice-dollar mr-2 text-xs" />
            invoice
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-folder-open mr-2 text-xs" />
            file manager
          </a>
          {/* end link */}
          <p class="mb-4 mt-4 text-xs uppercase tracking-wider text-gray-600">
            UI Elements
          </p>
          {/* link */}
          <a
            href="./typography.html"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-text mr-2 text-xs" />
            typography
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="./alert.html"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-whistle mr-2 text-xs" />
            alerts
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="./buttons.html"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-cricket mr-2 text-xs" />
            buttons
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-box-open mr-2 text-xs" />
            Content
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-swatchbook mr-2 text-xs" />
            colors
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-atom-alt mr-2 text-xs" />
            icons
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-club mr-2 text-xs" />
            card
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-cheese-swiss mr-2 text-xs" />
            Widgets
          </a>
          {/* end link */}
          {/* link */}
          <a
            href="#"
            class="mb-3 text-sm font-medium capitalize transition duration-500 ease-in-out hover:text-teal-600"
          >
            <i class="fad fa-computer-classic mr-2 text-xs" />
            Components
          </a>
          {/* end link */}
        </div>
        {/* end sidebar content */}
      </div>
    </>
  );
}
const DefaultLayout = component$(() => {
  return (
    <div class=" bg-gray-100">
      <button onClick$={() => useLogin()}>登录</button>
      <Navbar></Navbar>
      <div class="flex h-screen flex-row flex-wrap">
        <Sidebar></Sidebar>
        <div class="flex-1 bg-gray-100 p-6 md:mt-16">
          <Slot />
        </div>
      </div>
    </div>
  );
});

export default DefaultLayout;
