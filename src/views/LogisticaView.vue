
<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"

// <Breadcrumb greetingMessage="hello"/>

</script>


<template>

  <div class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-10 mt-5">
      <p  rel="noreferrer" class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
        Somos el puente entre la tecnología y los negocios    
      </p>
      <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl"> 
          <span class="relative whitespace-nowrap text-rose-700">
              <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-rose-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
              <span class="relative">Logística</span>
          </span>
          y transportación empresarial.
      </h1>
      <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        Su seguridad y la de los que le rodean es prioridad. Pero también las pérdidas materiales afectan a su negocio. Por ello le ofrecemos una gama de soluciones que atenderán este tipo de incidencias
      </p>
  </div>



  <section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800  lg:text-3xl ">Contando con <br> los <span class="underline decoration-rose-500">siguientes servicios</span></h1>

        <p class="mt-4 text-gray-500 xl:mt-6 ">
          JBS Go comprende el valor del tiempo y lo importante que es llegar al lugar indicado en el momento justo.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 space-y-3 border-2 border-rose-700  rounded-xl">
                <span class="inline-block text-rose-700 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">Logística</h1>
                <p class="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>

            <div class="p-8 space-y-3 border-2 border-rose-400  rounded-xl">
                <span class="inline-block text-rose-700 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">Transportación ejecutiva.</h1>
                <p class="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>
        </div>
    </div>
</section>
 
  <div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-rose-100 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-rose-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
          Meet & greet Transfer
        </h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-rose-100 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-rose-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
          Pick up
        </h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-rose-100 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-rose-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
          Drop off
        </h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-rose-100 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-rose-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
          Door to door
        </h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-rose-100 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-rose-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
          Traslado foráneo
        </h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-rose-100 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-rose-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
          Servicio a disposición
        </h6>
      </div>
  </div>
    </div>
    <div class="relative">
      <img class="object-cover w-full h-56 sm:h-96" src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
      <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
    </div>
  </div>


  ﻿

Suv's Ejecutivas
Gracias a sus características de diseño, estas SUV's ofrecen una capacidad de 6-7 pasajeros. Viaja con estilo y máxima seguridad. Sus interiores de lujo y equipo multimedia permite un ambiente de relajación que hacen de tus trayectos algo único.
Transporte Empresarial
Ideales para un traslado confortable de tu llegada al aeropuerto a cualquier destino. Con capacidad hasta para 4 pasajeros. Todas nuestras unidades ofrecen un gran espacio, comodidad y seguridad.
Mercedes-Benz Sprinter
Ideal para el transporte de turismo o grupal, con capacidad hasta de 17 pasajeros. Cuentan con cómodos asientos ajustables y cinturones independientes, sistemas inteligentes de manejo, sistemas de asistencia de conducción, luces de niebla, escalón eléctrico y sistema de presión de monitoreo de neumáticos.

<section class="p-4 lg:p-8 ">
	<div class="container mx-auto space-y-12">
		<div class="flex flex-col overflow-hidden rounded-md lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" class="rounded-lg h-80  aspect-video">
			<div class="flex flex-col justify-center flex-1 p-6 ">
				<h3 class="text-3xl font-bold uppercase">Suv's Ejecutivas</h3>
				<p class="my-6 ">
          Gracias a sus características de diseño, estas SUV's ofrecen una capacidad de 6-7 pasajeros. Viaja con estilo y máxima seguridad. Sus interiores de lujo y equipo multimedia permite un ambiente de relajación que hacen de tus trayectos algo único.
                </p>
			</div>
		</div>
		<div class="flex flex-col overflow-hidden rounded-md  lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" class="rounded-lg h-80  aspect-video">
			<div class="flex flex-col justify-center flex-1 p-6 ">
				<h3 class="text-3xl font-bold uppercase">Transporte Empresarial</h3>
				<p class="my-6 ">
          Ideales para un traslado confortable de tu llegada al aeropuerto a cualquier destino. Con capacidad hasta para 4 pasajeros. Todas nuestras unidades ofrecen un gran espacio, comodidad y seguridad.
        </p>
			</div>
		</div>
		<div class="flex flex-col overflow-hidden rounded-md  lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" class="rounded-lg h-80  aspect-video">
			<div class="flex flex-col justify-center flex-1 p-6 ">
				<h3 class="text-3xl font-bold uppercase">Mercedes-Benz Sprinter</h3>
				<p class="my-6 ">
          Ideal para el transporte de turismo o grupal, con capacidad hasta de 17 pasajeros. Cuentan con cómodos asientos ajustables y cinturones independientes, sistemas inteligentes de manejo, sistemas de asistencia de conducción, luces de niebla, escalón eléctrico y sistema de presión de monitoreo de neumáticos.
        </p>
			</div>
		</div>
	</div>
</section>

  <div class="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:py-25 py-20" style='background-image: url("https://sandbox.elemisthemes.com/assets/img/map.png")'>
      <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl"> 
          <span class="relative whitespace-nowrap text-rose-700">
              <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-rose-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
              <span class="relative">En JBS Go</span>
          </span>
      </h1>
      <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        Comprende el valor del tiempo y lo importante que es llegar al lugar indicado en el momento justo. Comprometidos en ofrecer una gama completa de opciones para resolver los desafíos de seguridad, movilidad y puntualidad de nuestros clientes
      </p>
  </div>

</template>
