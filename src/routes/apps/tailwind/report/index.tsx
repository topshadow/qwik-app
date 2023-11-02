import { component$ } from "@builder.io/qwik";

export function GenerateResport() {
  return (
    <div class="grid grid-cols-4 gap-6 xl:grid-cols-1">
      {/* card */}
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            {/* top */}
            <div class="flex flex-row items-center justify-between">
              <div class="h6 fad fa-shopping-cart text-indigo-700" />
              <span class="badge rounded-full bg-teal-400 text-xs text-white">
                12%
                <i class="fal fa-chevron-up ml-1" />
              </span>
            </div>
            {/* end top */}
            {/* bottom */}
            <div class="mt-8">
              <h1 class="h5 num-4" />
              <p>items sales</p>
            </div>
            {/* end bottom */}
          </div>
        </div>
        <div class="footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1" />
      </div>
      {/* end card */}
      {/* card */}
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            {/* top */}
            <div class="flex flex-row items-center justify-between">
              <div class="h6 fad fa-store text-red-700" />
              <span class="badge rounded-full bg-red-400 text-xs text-white">
                6%
                <i class="fal fa-chevron-down ml-1" />
              </span>
            </div>
            {/* end top */}
            {/* bottom */}
            <div class="mt-8">
              <h1 class="h5 num-4" />
              <p>new orders</p>
            </div>
            {/* end bottom */}
          </div>
        </div>
        <div class="footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1" />
      </div>
      {/* end card */}
      {/* card */}
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            {/* top */}
            <div class="flex flex-row items-center justify-between">
              <div class="h6 fad fa-sitemap text-yellow-600" />
              <span class="badge rounded-full bg-teal-400 text-xs text-white">
                72%
                <i class="fal fa-chevron-up ml-1" />
              </span>
            </div>
            {/* end top */}
            {/* bottom */}
            <div class="mt-8">
              <h1 class="h5 num-4" />
              <p>total Products</p>
            </div>
            {/* end bottom */}
          </div>
        </div>
        <div class="footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1" />
      </div>
      {/* end card */}
      {/* card */}
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            {/* top */}
            <div class="flex flex-row items-center justify-between">
              <div class="h6 fad fa-users text-green-700" />
              <span class="badge rounded-full bg-teal-400 text-xs text-white">
                150%
                <i class="fal fa-chevron-up ml-1" />
              </span>
            </div>
            {/* end top */}
            {/* bottom */}
            <div class="mt-8">
              <h1 class="h5 num-4" />
              <p>new Visitor</p>
            </div>
            {/* end bottom */}
          </div>
        </div>
        <div class="footer mx-4 rounded rounded-t-none border border-t-0 bg-white p-1" />
      </div>
      {/* end card */}
    </div>
  );
}

function Analytics() {
  return (
    <div class="mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1">
      {/* update section */}
      <div class="card border-teal-400 bg-teal-400 text-white shadow-md">
        <div class="card-body flex flex-row">
          {/* image */}
          <div class="img-wrapper flex h-40 w-40 items-center justify-center">
            <img src="/img/happy.svg" alt="img title" />
          </div>
          {/* end image */}
          {/* info */}
          <div class="ml-10 py-2">
            <h1 class="h6">Good Job, Mohamed!</h1>
            <p class="text-xs text-white">
              You've finished all of your tasks for this week.
            </p>
            <ul class="mt-4">
              <li class="text-sm font-light">
                <i class="fad fa-check-double mb-2 mr-2" /> Finish Dashboard
                Design
              </li>
              <li class="text-sm font-light">
                <i class="fad fa-check-double mb-2 mr-2" /> Fix Issue #74
              </li>
              <li class="text-sm font-light">
                <i class="fad fa-check-double mr-2" /> Publish version 1.0.6
              </li>
            </ul>
          </div>
          {/* end info */}
        </div>
      </div>
      {/* end update section */}
      {/* carts */}
      <div class="flex flex-col">
        {/* alert */}
        <div class="alert alert-dark mb-6">
          Hi! Wait A Minute . . . . . . Follow Me On Twitter
          <a
            class="ml-2"
            target="_blank"
            href="https://twitter.com/MohamedSaid__"
          >
            @moesaid
          </a>
        </div>
        {/* end alert */}
        {/* charts */}
        <div class="grid h-full grid-cols-2 gap-6">
          <div class="card">
            <div class="flex flex-row justify-between px-4 py-3">
              <h1 class="h6">
                <span class="num-4" />k<p>page view</p>
              </h1>
              <div class="flex h-10 w-10 items-center justify-center rounded-full border border-teal-300 bg-teal-200 text-teal-700">
                <i class="fad fa-eye" />
              </div>
            </div>
            <div class="analytics_1" />
          </div>
          <div class="card">
            <div class="flex flex-row justify-between px-4 py-3">
              <h1 class="h6">
                <span class="num-2" />k<p>Unique Users</p>
              </h1>
              <div class="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-300 bg-indigo-200 text-indigo-700">
                <i class="fad fa-users-crown" />
              </div>
            </div>
            <div class="analytics_1" />
          </div>
        </div>
        {/* charts    */}
      </div>
      {/* end charts */}
    </div>
  );
}
export default component$(() => {
  return (
    <>
      <GenerateResport></GenerateResport>
      <Analytics></Analytics>
      <Congrats></Congrats>
      <SailsOverview></SailsOverview>
    </>
  );
});

function Congrats() {
  return (
    <>
      {/* congrats */}
      <div class="card col-span-1">
        <div class="card-body flex h-full flex-col justify-between">
          <div>
            <h1 class="text-lg font-bold tracking-wide">
              Congratulations Moe!
            </h1>
            <p class="mt-2 text-gray-600">Best seller of the month</p>
          </div>
          <div class="mt-10 flex flex-row items-end">
            <div class="flex-1">
              <h1 class="text-4xl font-extrabold text-teal-400">$89k</h1>
              <p class="mb-4 mt-3 text-xs text-gray-500">
                You have done 57.6% more sales today.
              </p>
              <a href="#" class="btn-shadow py-3">
                view sales
              </a>
            </div>
            <div class="ml-10 h-32 w-32 flex-1 overflow-hidden lg:h-auto lg:w-auto">
              <img class="object-cover" src="img/congrats.svg" />
            </div>
          </div>
        </div>
      </div>
      {/* end congrats */}
    </>
  );
}
function SailsOverview() {
  return (
    <div class="card mt-6">
      {/* header */}
      <div class="card-header flex flex-row justify-between">
        <h1 class="h6">Sales Overview</h1>
        <div class="flex flex-row items-center justify-center">
          <a href="">
            <i class="fad fa-chevron-double-down mr-6" />
          </a>
          <a href="">
            <i class="fad fa-ellipsis-v" />
          </a>
        </div>
      </div>
      {/* end header */}
      {/* body */}
      <div class="card-body grid grid-cols-2 gap-6 lg:grid-cols-1">
        <div class="p-8">
          <h1 class="h2">5,337</h1>
          <p class="font-medium text-black">Sales this month</p>
          <div class="mb-2 mt-20 flex items-center">
            <div class="mr-3 rounded bg-green-200 px-3 py-1 text-green-900">
              <i class="fa fa-caret-up" />
            </div>
            <p class="text-black">
              <span class="num-2 text-green-400" />
              <span class="text-green-400">% more sales</span> in comparison to
              last month.
            </p>
          </div>
          <div class="flex items-center">
            <div class="mr-3 rounded bg-red-200 px-3 py-1 text-red-900">
              <i class="fa fa-caret-down" />
            </div>
            <p class="text-black">
              <span class="num-2 text-red-400" />
              <span class="text-red-400">% revenue per sale</span> in comparison
              to last month.
            </p>
          </div>
          <a href="#" class="btn-shadow mt-6">
            view details
          </a>
        </div>
        <div class="">
          <div id="sealsOverview" />
        </div>
      </div>
      {/* end body */}
    </div>
  );
}
