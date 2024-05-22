import {
  CalendarCheck,
  Certificate,
  CircleWavyQuestion,
  House,
  InstagramLogo,
  Key,
  LinkedinLogo,
  List,
  ListBullets,
  Money,
  Plus,
  Queue,
  SealCheck,
  ThumbsUp,
  UsersThree,
  Video,
  XCircle,
} from "@phosphor-icons/react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import Head from "next/head";
import Image from "next/image";
import menu from "../data/menu";
import seo from "../data/seo";
import topics from "../data/topics";
import profileImage from "../public/assets/diogo-machado.jpg";

export default function Home() {
  // Usado para criar a animação com framer no SVG
  const stateLineSVG = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#FDE68A",
    },
  };

  const iconMenu = (name, colorSelected = "#f2f2f2") => {
    let tailwindClasses = "inline-flex relative mr-1";

    switch (name) {
      case "House":
        return (
          <House
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;
      case "ListBullets":
        return (
          <ListBullets
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;
      case "UsersThree":
        return (
          <UsersThree
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;
      case "ThumbsUp":
        return (
          <ThumbsUp
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;
      case "CircleWavyQuestion":
        return (
          <CircleWavyQuestion
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;

      case "Key":
        return (
          <Key
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;

      case "Money":
        return (
          <Money
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;

      default:
        return (
          <House
            className={tailwindClasses}
            size={20}
            color={colorSelected}
            weight="light"
          />
        );
        break;
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title} </title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href={seo.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:alt" content="Imersão CSS logo" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:updated_time" content="1667614419" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo.url} />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta property="twitter:image" content={seo.image} />
      </Head>

      <main id="home">
        <nav className="flex justify-center bg-neutral-900 border-b border-zinc-600 sticky xl:top-0 z-50">
          {/* Menu principal topo */}
          <ul className="hidden xl:flex">
            {menu.map((item, i) => (
              <li key={i}>
                <a
                  className="inline-flex items-center p-4 font-bold text-neutral-200 hover:opacity-90"
                  href={item.link}
                  title={item.description}
                >
                  {iconMenu(item.icon, item.colorSelected)}
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <aside className="flex flex-1 xl:flex-none items-center justify-between xl:justify-center xl:pr-3">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="xl:hidden p-4 flex items-center gap-2">
                  <List size={32} color="#f2f2f2" weight="light" />
                  Menu
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="modal-menu-overlay">
                  <Dialog.Content className="modal-menu relative">
                    <ul className="flex flex-col">
                      {menu.map((item, i) => (
                        <li key={i}>
                          <Dialog.Trigger asChild>
                            <a
                              className="block pl-4 pr-4 pt-3 pb-3 text-neutral-800 font-black"
                              href={item.link}
                            >
                              {iconMenu(item.icon, "#000")}
                              {item.title}
                            </a>
                          </Dialog.Trigger>
                        </li>
                      ))}
                    </ul>
                    <Dialog.Close
                      aria-label="Botão fechar janela"
                      className="absolute top-2 right-2"
                    >
                      <XCircle size={32} color="#ccc" weight="light" />
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Overlay>
              </Dialog.Portal>
            </Dialog.Root>
          </aside>
        </nav>

        <div className="content-primary">
          <div class="z-1 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="relative md:w-2/3 xl:w-[1100px] md:m-auto z-20">
            <header className="mb-4">
              <h3 className="text-neutral-800 text-lg">Workshop</h3>
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-neutral-900 flex items-center">
                Tailwind CSS{" "}
                <SealCheck
                  size={32}
                  weight="fill"
                  className="text-green-500 ml-2"
                />
              </h1>
              <h2 className="text-xl lg:text-2xl text-neutral-800">
                Sua Jornada para Sites Rápidos
              </h2>
            </header>

            <section className="flex flex-col md:flex-row gap-3">
              <a
                className="flex items-center justify-center gap-3 bg-white text-indigo-600 p-4 rounded-md text-xl border-2"
                href="#ementa"
              >
                <Queue size={32} weight="fill" /> Conteúdo
              </a>

              <a
                className="flex bg-blue-800 text-white p-5 rounded-md text-xl justify-center"
                href={process.env.NEXT_PUBLIC_HOTLINK}
                target="_blank"
                rel="noreferrer"
              >
                Inscreva-se
              </a>
            </section>

            <aside className="mt-2 md:mt-6 flex gap-4 lg:gap-7 justify-center md:justify-normal">
              <p className="text-neutral-500 flex gap-1 md:justify-start">
                <CalendarCheck size={24} weight="thin" /> 25 de Maio 2024
              </p>
              <p className="text-neutral-500 md:flex gap-1 md:justify-start hidden">
                <Video size={24} weight="thin" /> Online no Zoom
              </p>
              <p className="text-neutral-500 md:flex gap-1 md:justify-start hidden">
                <Certificate size={24} weight="thin" /> Certificado
              </p>
            </aside>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-center xl:h-screen items-center gap-14 mt-24 lg:mt-auto p-6">
          <Image
            className="image-profile rounded-full"
            src={profileImage}
            alt="Foto de perfil do instrutor"
            quality={100}
            objectFit="contain"
          ></Image>

          <div className="max-w-[578px] lg:max-w-[800px]">
            <header className="mb-4 xl:mb-8">
              <p className="text-center md:text-start text-neutral-100">
                Sobre o autor
              </p>
              <h3 className="text-3xl xl:text-5xl font-bold mb-5 text-center md:text-start p-1 md:p-0">
                Diogo Souza Machado
              </h3>
            </header>
            <p className="leading-relaxed text-lg xl:text-2xl text-neutral-400 mb-12 text-center md:text-start font-serif">
              Trabalho há 12 anos com desenvolvimento de software para a web, já
              atuei em empresas como São Camilo, Unimed, Americanas, BeatStars,
              Checklist Fácil além de também ser freelancer por muitos anos.
              Minha especialidade é front-end, sou também autor do curso
              avançado Imersão CSS, neste workshop te convido a junto comigo
              conhecer como o Tailwind CSS pode nos ajudar a ter velocidade e
              ainda entregar sites e sistemas web com qualidade de design.
            </p>

            <p className="hidden xl:block mb-2">Minhas redes:</p>
            <div className="flex flex-col md:flex-row gap-3 mb-32">
              <a
                className="inline-flex items-center gap-3 border p-3 rounded-md border-neutral-600 hover:opacity-60"
                href="https://instagram.com/diogom"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo size={32} weight="fill" />
                <span className="text-neutral-300">Instagram</span>
              </a>
              <a
                className="inline-flex items-center gap-3 border p-3 rounded-md border-neutral-600 hover:opacity-60"
                href="https://www.linkedin.com/in/diogosmachado/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo size={32} weight="fill" color="#2563EB" />
                <span className="text-neutral-300">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pl-10 pr-10 md:pl-28 md:pr-28">
          <section id="ementa" className="pt-20 xl:pt-32">
            <div className="text-center pb-20">
              <h2 className="text-5xl font-extrabold">
                Um pouco do que veremos
              </h2>
            </div>
          </section>

          {/* Ementa do curso */}
          <Accordion.Root className="max-w-xl m-auto" collapsible>
            <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-4 max-w-5xl m-auto">
              {topics.map((section, i) => (
                <Accordion.Item
                  key={i}
                  value={`section-${i}`}
                  className="p-4 border rounded border-neutral-700 accordion-item-section"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex flex-row justify-between w-full">
                      <p className="font-bold text-left text-base max-w-[200px] xl:max-w-none">
                        {section.title}

                        {section.new && (
                          <sup className="text-lime-900 bg-lime-400 rounded-full pl-2 pr-2 ml-2">
                            novo
                          </sup>
                        )}
                      </p>
                      <div className="icon">
                        <Plus
                          size={24}
                          className="text-blue-400"
                          weight="light"
                        />
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="mt-4 text-neutral-300 leading-relaxed">
                    <ul>
                      {section.sections.map((item, j) => (
                        <li
                          className={`pl-4 pr-4 pt-3 pb-3 font-normal rounded ${
                            j % 2 == 0 ? "bg-gray-900" : ""
                          }`}
                          key={j}
                        >
                          <span className="text-neutral-200/95 text-sm">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </div>
          </Accordion.Root>

          <section id="preco">
            <div class="flex items-center justify-center flex-col my-20">
              <div className="max-w-[820px]">
                <div class="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
                  <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                    Ingresso online
                  </h3>

                  <div class="mt-5">
                    <p class="text-2xl font-bold line-through text-gray-400 dark:text-neutral-200">
                      R$149
                    </p>
                    <span class="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                      R$97
                    </span>
                    <span class="text-lg font-bold text-gray-800 dark:text-neutral-200">
                      .00
                    </span>
                  </div>

                  <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    <ul class="space-y-2 text-sm sm:text-base">
                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            class="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span class="text-gray-800 dark:text-neutral-200">
                          Participação no Zoom
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            class="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span class="text-gray-800 dark:text-neutral-200">
                          Gravação
                        </span>
                      </li>

                      <li class="flex space-x-3">
                        <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            class="flex-shrink-0 size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span class="text-gray-800 dark:text-neutral-200">
                          Certificado
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p class="text-sm text-gray-500 dark:text-neutral-500">
                        Ingressos limitados.
                      </p>
                    </div>

                    <div class="flex justify-end">
                      <a
                        targer="_blank"
                        rel="noreferer"
                        href={process.env.NEXT_PUBLIC_HOTLINK}
                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                      >
                        Garantir vaga
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-center p-4">
            <p className="text-neutral-700 text-xs">
              © 2019 – 2024, Todos os direitos reservados. – DM Tecnologia, CNPJ
              43.820.465/0001-00
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
