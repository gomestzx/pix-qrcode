import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

function Privacidade() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap-reverse justify-center'>
                <div className='w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap  shadow-lg bg-white flex-col'>
                    <h1 className=' text-3xl font-bold'>Política de Privacidade</h1>
                    <br />

                    <span>
                        Data de vigência: 25 de setembro de 2023
                    </span>

                    <br />


                    <p>
                        Bem-vindo ao pix-qr-code.com! Estamos comprometidos em proteger a privacidade dos nossos usuários. Esta Política de Privacidade foi criada para explicar como coletamos, usamos, divulgamos e protegemos suas informações pessoais. Leia atentamente o seguinte documento para entender nossas práticas em relação aos seus dados.
                    </p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>Informações Coletadas</h3>
                    <br />

                    <p>
                        Informações de Uso: Coletamos informações sobre como você utiliza nosso site, incluindo o navegador que você utiliza, seu endereço IP, páginas acessadas, data e hora das visitas e a duração de sua permanência no site. Utilizamos cookies e tecnologias semelhantes para coletar essas informações.
                        Informações Fornecidas Voluntariamente: Quando você usa nossos serviços para gerar QR Codes para Pix, podemos coletar informações que você nos fornece, como seu endereço de e-mail para receber o QR Code gerado ou informações adicionais que você escolhe compartilhar conosco.
                    </p>




                    <br />
                    <h3 className='text-start text-lg font-semibold'> Uso das Informações</h3>
                    <br />

                    <p>
                        Utilizamos as informações coletadas para os seguintes fins:

                        Fornecimento de Serviços: Utilizamos suas informações para gerar QR Codes para Pix conforme sua solicitação e para enviar esses códigos para você, quando aplicável.

                        Melhorias no Serviço: Analisamos as informações de uso para melhorar a qualidade de nossos serviços, entender como os usuários interagem com nosso site e otimizar a experiência do usuário.

                        Comunicação: Podemos entrar em contato com você para fornecer informações sobre nossos serviços, como atualizações, novos recursos ou alterações na política.
                    </p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>  Compartilhamento de Informações</h3>
                    <br />


                    <p> Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:

                        Parceiros de Serviços: Podemos compartilhar suas informações com prestadores de serviços terceirizados que nos auxiliam na prestação de nossos serviços, como provedores de hospedagem e processamento de pagamento. Esses terceiros estão sujeitos a obrigações contratuais de proteger suas informações.

                        Requisitos Legais: Em casos de cumprimento de obrigações legais, como ordens judiciais ou solicitações governamentais, poderemos divulgar informações pessoais.</p>


                    <br />
                    <h3 className='text-start text-lg font-semibold'>  Segurança das Informações</h3>
                    <br />

                    <p> Empregamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhum sistema de segurança é totalmente impenetrável, e não podemos garantir a segurança absoluta de suas informações.</p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>  Seus Direitos</h3>
                    <br />
                    
                    <p>
                    Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Além disso, você pode optar por não receber comunicações de marketing direto da nossa parte.
                    </p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>   Alterações nesta Política de Privacidade</h3>
                    <br />
                   
                    <p>Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página, e a data de vigência será atualizada. Recomendamos que você reveja esta política periodicamente para se manter informado sobre como suas informações estão sendo protegidas e usadas.</p>

                    
                    <br />
                    <h3 className='text-start text-lg font-semibold'>   Contato</h3>
                    <br />
                   <p>
                   Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade, entre em contato conosco pelo seguinte endereço de e-mail: contato@pix-qr-code.com.
                    <br />
Obrigado por escolher o pix-qr-code.com! Estamos empenhados em proteger sua privacidade e proporcionar uma experiência segura e eficiente ao utilizar nossos serviços.
                   </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Privacidade