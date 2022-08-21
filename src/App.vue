<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-purple-900" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <!-- <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
          </div>-->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:bg-purple-700 hover:text-white"
                active-class="!bg-purple-900 !text-white"
                :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</router-link>
              <a href="https://discord.gg/SeQm7fQznT" target="_blank" class="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:bg-purple-700 hover:text-white"
              >Discord</a>
              <!-- <a class="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:bg-purple-700 hover:text-white" > Login </a> -->
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- <button
            class="bg-purple-800 p-1 rounded-full text-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button> -->

          <!-- Profile dropdown -->
          <UserIcon
            v-if="store.state.user.steam == null"
            class="h-8 w-8 rounded-full text-white bg-purple-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
          />
          <img
            v-else
            class="h-8 w-8 rounded-full bg-purple-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
            :src="store.state.user.steam.photos[2].value"
            alt="pfp"
          />
          <!-- <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-purple-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-purple-100' : '', 'block px-4 py-2 text-sm text-purple-700']"
                  >Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-purple-100' : '', 'block px-4 py-2 text-sm text-purple-700']"
                  >Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-purple-100' : '', 'block px-4 py-2 text-sm text-purple-700']"
                  >Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:bg-purple-700 hover:text-white"
          active-class="!bg-purple-900 !text-white"
          :aria-current="item.current ? 'page' : undefined"
        >{{ item.name }}</router-link>
        <a href="https://discord.gg/SeQm7fQznT" target="_blank" class="px-3 py-2 rounded-md text-sm font-medium text-purple-300 hover:bg-purple-700 hover:text-white"
        >Discord</a>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <router-view></router-view>
  <!-- <div class="h-30"></div> -->
  <footer class="bg-purple-800 w-full py-4  bottom-0 absolute text-white">
      <div class="max-w-screen-xl mx-auto px-4 text-center">
          <span class="text-gray-400">
            Made by 
          </span>
          <a href="https://twitter.com/CheesiestPotato" target="_blank">CheesyPotato</a>
          <img class="absolute bottom-2 right-5 h-10 transition ease-in duration-200 opacity-0 hover:opacity-100" src="/trans_heart.png"/>
          <!-- <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
              <li class="my-2">
                  <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                      FAQ
                  </a>
              </li>
              <li class="my-2">
                  <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                      Configuration
                  </a>
              </li>
              <li class="my-2">
                  <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                      Github
                  </a>
              </li>
              <li class="my-2">
                  <a class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                      LinkedIn
                  </a>
              </li>
          </ul> -->
      </div>
  </footer>

</template>
  

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { UserIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'

const store = useStore()

const open = ref(false)

const navigation = computed(() => {
  if (store.getters.loggedIn) {
    return [
      { name: 'Welcome', href: '/', current: true },
      // { name: 'About', href: '/settings', current: false },
      { name: 'Main', href: '/main', current: false },
      { name: 'Changelog', href: '/changelog', current: false },
    ]
  }

  else {
    return [
      { name: 'Welcome', href: '/', current: true },
      { name: 'Changelog', href: '/changelog', current: false },
      // { name: 'About', href: '/settings', current: false },
      
    ]
  }
})





</script>
<!-- 
<script setup lang="ts">
</script> -->