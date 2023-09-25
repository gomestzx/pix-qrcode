import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

function TermosDeServico() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap-reverse justify-center'>
                <div className='w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap  shadow-lg bg-white flex-col'>
                    <h1 className=' text-3xl font-bold'>Termos de Serviço</h1>
                    <br />

                    <span>
                        Data de vigência: 25 de setembro de 2023
                    </span>

                    <br />


                    <p>
                        Bem-vindo ao pix-qr-code.com! Estamos comprometidos em proteger a privacidade dos nossos usuários. Esta Política de Privacidade foi criada para explicar como coletamos, usamos, divulgamos e protegemos suas informações pessoais. Leia atentamente o seguinte documento para entender nossas práticas em relação aos seus dados.
                    </p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>1. Uso de Nossos Serviços</h3>
                    <br />

                    <p>
                        1.1. Uso Permitido: Você pode usar nossos serviços para gerar QR Codes para Pix de acordo com as leis e regulamentos aplicáveis. Você concorda em não utilizar nossos serviços para qualquer finalidade ilegal ou não autorizada.
                    </p>
                    <br />
                    <p>

                        1.2. Responsabilidade pelo Uso: Você é o único responsável por todas as atividades que ocorrem sob sua conta e deve manter sua senha e informações de acesso em sigilo. Informe-nos imediatamente caso suspeite de uso não autorizado de sua conta.
                    </p>
                    <br />

                    <p>
                        1.3. Idade Mínima: Para utilizar nossos serviços, você deve ter pelo menos 18 anos de idade ou a idade da maioridade em sua jurisdição.
                    </p>



                    <br />
                    <h3 className='text-start text-lg font-semibold'> 2. Geração de QR Codes para Pix</h3>
                    <br />

                    <p>
                        2.1. Precisão das Informações: Ao utilizar nossos serviços para gerar QR Codes, você é responsável por fornecer informações precisas e completas. Não nos responsabilizamos por informações incorretas fornecidas por você.
                    </p>
                    <br />

                    <p>
                        2.2. Propriedade do QR Code: O QR Code gerado usando nossos serviços é de sua propriedade e responsabilidade. Não somos responsáveis por quaisquer perdas ou danos decorrentes do uso do QR Code.
                    </p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>  3. Direitos de Propriedade Intelectual</h3>
                    <br />


                    <p> 3.1. Direitos Autorais: Todos os conteúdos presentes em nosso site, incluindo textos, imagens, logotipos e software, são protegidos por direitos autorais e são de propriedade exclusiva do pix-qr-code.com ou de nossos licenciadores.</p>
                    <br />
                    <p>3.2. Licença Limitada: Concedemos a você uma licença limitada, não exclusiva e não transferível para utilizar nossos serviços de acordo com estes Termos de Serviço. Esta licença não lhe dá direito de sublicenciar, vender, modificar ou distribuir nossos serviços.</p>


                    <br />
                    <h3 className='text-start text-lg font-semibold'>  4. Modificações nos Serviços</h3>
                    <br />

                    <p> Reservamo-nos o direito de modificar, suspender ou descontinuar parte ou a totalidade de nossos serviços a qualquer momento, com ou sem aviso prévio. Não seremos responsáveis por você ou por terceiros por quaisquer modificações, suspensões ou descontinuações dos serviços.</p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'> 5. Limitação de Responsabilidade</h3>
                    <br />

                    <p>
                        5.1. Isenção de Garantias: Nossos serviços são fornecidos "no estado em que se encontram", e não fazemos garantias de qualquer tipo, expressas ou implícitas, incluindo garantias de comercialização, adequação a uma finalidade específica ou não violação.
                    </p>
                    <br />

                    <p>

                        5.2. Limitação de Responsabilidade: Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequentes ou punitivos decorrentes ou relacionados ao uso de nossos serviços.
                    </p>

                    <br />
                    <h3 className='text-start text-lg font-semibold'>   6. Disposições Gerais</h3>
                    <br />

                    <p>6.1. Lei Aplicável: Estes Termos de Serviço são regidos pelas leis do Brasil, independentemente de conflitos de princípios legais.</p>
                    <br />
                    <p>6.2. Rescisão: Reservamo-nos o direito de rescindir ou suspender sua conta e o acesso aos nossos serviços a qualquer momento, por qualquer motivo, sem aviso prévio.</p>
                    <br />

                    <p>6.3. Modificações nos Termos: Podemos modificar estes Termos de Serviço a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação dos Termos revisados em nosso site.</p>
                    <br />
                    <p>Ao utilizar nossos serviços, você concorda em cumprir estes Termos de Serviço. Se você não concordar com estes termos, não utilize nossos serviços. Se tiver alguma dúvida ou preocupação sobre estes Termos de Serviço, entre em contato conosco pelo seguinte endereço de e-mail: contato@pix-qr-code.com</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default TermosDeServico