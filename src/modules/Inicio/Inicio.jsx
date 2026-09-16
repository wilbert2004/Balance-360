import React from "react";
import { Link } from "react-router-dom";
import Balance from "../../assets/inicio/oli1.png";

function Inicio() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_75%]"
        style={{ backgroundImage: `url(${Balance})` }}
      />

      <div className="absolute inset-0 bg-[#071d13]/55" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#d8b66a]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8b66a]" />
          Bienvenido a Balance
        </p>

        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight md:text-7xl">
          Alimenta tu equilibrio.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
          Una experiencia gastronómica para disfrutar, compartir y encontrar tu
          equilibrio en el corazón de Valladolid, Yucatán.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/5219990000000"
            target="_blank"
            rel="noreferrer"
            className="bg-[#d8b66a] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#173526] transition hover:bg-[#edcf88]"
          >
            Reservar por WhatsApp
          </a>

          <Link
            to="/menu"
            className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#173526]"
          >
            Ver menú
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
