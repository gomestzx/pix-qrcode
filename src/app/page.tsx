import Banner from "@/components/Banner/Banner";
import Faq from "@/components/Faq/Faq";
import FormContainer from "@/components/FormContainer/FormContainer";
import LatestPosts from "@/components/Posts/LatestPosts";
import Card from "@/components/ui/Card/Card";
import Title from "@/components/ui/Title/Title";
import "tailwindcss/tailwind.css";

function App(): JSX.Element {
  return (
    <div className="">
      <Title
        title={
          <>
            Gerar{"  "}
            <span className="relative whitespace-nowrap ">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 418 42"
                width="418"
                height="42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
              >
                <path
                  id="Layer copy"
                  className="s0"
                  stroke="#14b8a6"
                  d="m127.6 4.7c-25.6 0.5-58.5 6.5-81.1 15l-5.3 2c-15 5.6-21.3 9.2-22.6 12.7-0.5 1.4-0.4 1.6 1.4 2.1 2.6 0.8 3 0.7 5.4-1.4 2.4-2.2 5.8-3.7 16.4-7.6 35.4-12.7 56.1-17.4 88.4-19.6 6.3-0.4 19.2-0.2 21 0.4 2.4 0.7 2.5 3.3 0.6 8.4-2.4 6.4-2.8 10.6-1 11.6 3 1.6 9 2.8 13.5 2.7 2.5 0 2.9-0.1 11.1-1.6 23.3-4.1 40-6.2 65.6-8 38.9-2.8 66.5-3.7 122.6-4 20.2-0.1 21.1-0.2 22.8-0.9 0.6-0.2-2.5-1.3-4.5-1.5-5.1-0.7-7.3-0.7-24.8-0.6-58.5 0.3-87.1 1.2-124.2 3.9-19.5 1.4-27.7 2.2-39.9 3.9-8.4 1.2-29.4 4.5-32 5.1-1.4 0.4-0.9-2.9 1.2-8.1 2.7-6.7 1.7-8.5-6.1-11-8.7-2.9-15.4-3.7-28.5-3.5z"
                />
              </svg>

              <span className="relative">QR Code</span>
            </span>{" "}
            <span className=" text-teal-500">PIX</span>
          </>
        }
        description={
          <>
            Crie seu QR Code PIX grátis – Rápido, fácil e seguro. <br />
            Gere QR Codes personalizados para suas chaves PIX e facilite seus
            pagamentos instantâneos.
          </>
        }
      />
      <div className="flex flex-wrap-reverse justify-center font-medium">
        <FormContainer />
      </div>

      <div className="w-full md:w-4/6 mx-auto mt-8 flex justify-center md:justify-between flex-wrap mb-4">
        <Card
          img="/img1.png"
          titulo="Grátis"
          conteudo="Crie quantos QR Codes quiser!"
        />
        <Card
          img="/img2.png"
          titulo="Design"
          conteudo="Melhore sua forma de pagamentos via Pix"
        />
        <Card
          img="/img3.png"
          titulo="Seguro"
          conteudo="Não armazenamos nenhum dado"
        />
      </div>
      <Banner />
      <Title
        customClassName="mt-8"
        title="Perguntas Frequentes"
        description="Encontre respostas para as dúvidas mais comuns sobre como usar nossa ferramenta, personalizar seus QR Codes e garantir a segurança de suas transações PIX"
      />
      <Faq />
      <Title
        title="Blog"
        description="Explore nossos artigos e descubra dicas, tutoriais e as últimas novidades sobre como utilizar nossa ferramenta"
      />

     <LatestPosts />
    </div>
  );
}

export default App;
