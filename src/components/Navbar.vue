<template>
    <div :class="[
        scrollPosition > 500
            ? 'bg-white fixed drop-shadow-2xl text-rose-700 '
            : 'bg-transparent absolute text-slate-100',
    ]" class="' z-50 px-4 py-5 w-full nav1'">
       <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <RouterLink to="/home" class="flex items-center">
            <!--<img src="https://www.svgrepo.com/show/499962/music.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo">-->
            <span class="self-center text-xl font-black whitespace-nowrap">JBS GO.</span>
        </RouterLink>
        <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <RouterLink to="/home"
                class="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">Servicios</RouterLink>
            <button data-collapse-toggle="mobile-menu-2" type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-slate-500 rounded-lg lg:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
            
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                <!--<li>
                    <a href="#about"
                        class="block py-2 pl-3 pr-4 lg:p-0 text-slate-700 hover:text-rose-700"
                        aria-current="page">Nosotros</a>
                </li>
                <li>
                    <a href="#contact"
                        class="block py-2 pl-3 pr-4 lg:p-0 text-slate-700 hover:text-rose-700">Contact</a>
                </li>-->
            </ul>
        </div>
    </div>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            scrollPosition: null,
        };
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
        goToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
};

</script>