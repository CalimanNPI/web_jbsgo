<template>
    <div :class="[
        scrollPosition > 500
            ? 'bg-white fixed drop-shadow-2xl text-azul-500 '
            : 'bg-transparent absolute text-gray-100',
    ]" class="' z-50 px-4 py-5 w-full nav1'">
        <div class="relative flex items-center justify-between">
            <a @click="goToTop()" href="#" aria-label="Company" title="Company" class="inline-flex items-center">
                <span class="ml-2 text-xl font-bold tracking-wide uppercase">JBS GO</span>
            </a>
            <ul class="items-center hidden space-x-8 lg:flex">
                <li>
                    <a href="#Trasporte" aria-label="Our product" title="Our product"
                        class="hover:scale-300 hover:underline underline-offset-4 text-base font-extrabold leading-none tracking">Trasporte</a>
                </li>
                <li>
                    <a href="#Ejecutivo" aria-label="Our product" title="Our product"
                        class="hover:scale-125 hover:underline underline-offset-4 text-base font-extrabold leading-none tracking">Ejecutivo</a>
                </li>
                <li>
                    <a href="#Tours" aria-label="Product pricing" title="Product pricing"
                        class="hover:scale-125 hover:underline underline-offset-4 text-base font-extrabold leading-none tracking">Tours</a>
                </li>
                <li>
                    <a href="#Sistema" aria-label="About us" title="About us"
                        class="hover:scale-125 hover:underline underline-offset-4 text-base font-extrabold leading-none tracking">Sistema</a>
                </li>
                <li>
                    <a href="#Nosotros" aria-label="About us" title="About us"
                        class="hover:scale-125 hover:underline underline-offset-4 text-base font-extrabold leading-none tracking">Nosotros</a>
                </li>
            </ul>
            <ul class="items-center hidden space-x-8 lg:flex">
                <li></li>
            </ul>

            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal"
                class="space-x-8 lg:flex inline-flex items-center text-gray-200 justify-center h-12 px-6 font-medium tracking-wide transition rounded shadow-md bg-azul-500 focus:shadow-outline focus:outline-none ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-azul-700 duration-300"
                aria-label="Sign up" title="Sign up">
                Contacto
            </button>

            <div class="lg:hidden">
                <button aria-label="Open Menu" title="Open Menu"
                    class="hover:scale-125 p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = true">
                    <svg class="w-7" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                        <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z">
                        </path>
                        <path fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                    </svg>
                </button>
                <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full text-gray-200 bg-gray-900">
                    <div class="p-5 border rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <div>
                                <a href="/" aria-label="Company" title="Company"
                                    class="hover:scale-125 inline-flex items-center">
                                    <span class="ml-2 text-xl font-bold tracking-wide uppercase">JBS GO</span>
                                </a>
                            </div>
                            <div>
                                <button aria-label="Close Menu" title="Close Menu"
                                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                                    @click="isMenuOpen = false">
                                    <svg class="w-5" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul class="space-y-4">
                                <li>
                                    <a href="#Trasporte" aria-label="Our product"
                                        class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500">Trasporte
                                    </a>
                                </li>
                                <li>
                                    <a href="#Ejecutivo" aria-label="Our product"
                                        class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500">
                                        Ejecutivo</a>
                                </li>
                                <li>
                                    <a href="#Tours" aria-label="Product pricing"
                                        class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500">Tours</a>
                                </li>
                                <li>
                                    <a href="#Sistema" aria-label="About us"
                                        class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500">Sistema</a>
                                </li>
                                <li>
                                    <a href="#Nosotros" aria-label="About us"
                                        class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500">Nosotros</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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