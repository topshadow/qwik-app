import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-gray-100 flex-1 p-6 md:mt-16 grid grid-cols-8" > 

      <Sidebar></Sidebar>
      <EmailBody ></EmailBody>
    </div>
  );
});

function EmailBody() {
  return (
    <div class="card col-span-6 flex flex-col" client-load>
      <div class="border-b px-3">
        <form action="" class="flex">
          <input class="flex-1 p-3" type="text" placeholder="search" />
          <button type="submit" class="p-3">
            <i class="fad fa-search" />
          </button>
        </form>
      </div>
      <div class="flex flex-1 flex-col">
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" loading='lazy' />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
        {/* message */}
        <div class="shadow-xs flex items-center p-5 transition-all duration-300 ease-in-out hover:shadow-md">
          <div class="h-10 w-10 overflow-hidden rounded-md">
            <img class="img-responsive" loading="lazy" src="/img/user1.jpg" alt="" />
          </div>
          <h1 class="ml-3">mohamed</h1>
          <p class="ml-6 flex-1 text-xs">
            page when looking at its layout looking at its layout The point of
            using Lorem...
          </p>
          <p class="font-bold text-gray-900">05:09 AM</p>
        </div>
        {/* message */}
      </div>
      <div class="card-footer flex justify-between">
        <p>4.41 GB (25%) of 17 GB used Manage</p>
        <p>Last account activity: 36 minutes ago</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div class="col-span-2 bg-white border rounded p-6 mr-8">
    <a href="#" class="btn-bs-dark uppercase tracking-wider">
      <i class="fad fa-layer-plus mr-2" />
      Compose
    </a>
    <hr class="my-6" />
    <ul>
      <li class="my-5 mt-0">
        <a class="btn-indigo text-left" href="#">
          <i class="text-xs fad fa-inbox mr-1" />
          inbox
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-xs fad fa-paper-plane mr-1" />
          sent
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-xs fad fa-star mr-1" />
          Marked
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-xs fad fa-inbox-in mr-1" />
          draft
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-xs fad fa-inbox-out mr-1" />
          sent
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-xs fad fa-trash mr-1" />
          trash
        </a>
      </li>
      {/* seprator */}
      <hr class="my-10" />
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-indigo-700 fad fa-dot-circle mr-1" />
          Custom Work
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-gray-700 fad fa-dot-circle mr-1" />
          Important
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-green-700 fad fa-dot-circle mr-1" />
          work
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-yellow-700 fad fa-dot-circle mr-1" />
          design
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-red-700 fad fa-dot-circle mr-1" />
          laravel
        </a>
      </li>
      <li>
        <a
          class="btn text-left text-gray-800 bg-white hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          <i class="text-teal-800 fad fa-dot-circle mr-1" />
          add new label
        </a>
      </li>
    </ul>
  </div>
    );
}
