// Banco de Dados de Treinamentos - Equipe Youp
// Para adicionar uma nova aula, copie um bloco entre { }, coloque uma vírgula e cole abaixo.

const trilhasYoup = [
    {
        id: 1,
        trilha: "Gestão das Atividades",
        modulo: "Módulo 1: O Coração do Sistema",
        titulo: "Onboarding: Boas-vindas ao Painel Staff Youp",
        resumo: "Bem-vindo ao seu centro de comando. Entenda o fluxo de gestão, o ciclo de vida das vagas e como ler os dados estratégicos de cada cliente.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">Boas-vindas ao Painel Staff Youp! 🚀</h2>
                <p style="margin: 0 0 15px 0;">Este é o seu centro de comando. Todo o nosso fluxo de gestão de clientes, desde a aprovação de uma vaga até o agendamento da entrevista, acontece aqui. O objetivo deste sistema não é controlar você, mas sim <strong>liberar o seu tempo, organizar sua rotina e garantir que nenhum cliente ou oportunidade fique para trás</strong>.</p>
                <p style="margin: 0 0 15px 0;">Neste primeiro módulo, você vai entender como o sistema pensa, como ele é organizado e como ler as informações que ele te entrega.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">1. O Primeiro Acesso e a Visão Geral</h3>
                <p style="margin: 0 0 10px 0;">O acesso ao painel é exclusivo e personalizado. Logo na tela inicial, você verá um campo chamado <strong>E-mail Funcional</strong>.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>O que fazer:</strong> Digite o seu e-mail corporativo da Youp e clique em ACESSAR.</li>
                    <li style="margin-bottom: 5px;"><strong>Por que isso é importante:</strong> O sistema é inteligente. Ao reconhecer o seu e-mail, ele vai filtrar o banco de dados inteiro da Youp e carregar na tela apenas os clientes e as tarefas que estão sob a sua responsabilidade.</li>
                </ul>
                <p style="margin: 0 0 10px 0;">Após o acesso, você notará um menu superior com abas de navegação. As principais abas do seu dia a dia são:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Pendências:</strong> Onde caem as vagas novas que precisam da sua primeira ação (Candidatar-se ou Iniciar Contato).</li>
                    <li style="margin-bottom: 5px;"><strong>Follows:</strong> O seu "CRM" de relacionamento. Onde ficam as vagas nas quais você já fez uma abordagem e agora precisa acompanhar o retorno dos recrutadores.</li>
                    <li style="margin-bottom: 5px;"><strong>Arquivo:</strong> Onde ficam as vagas que já foram finalizadas ou descartadas.</li>
                    <li style="margin-bottom: 5px;"><strong>Uploader:</strong> A ferramenta para salvar os "prints" (evidências) das suas abordagens direto nas pastas dos clientes no Google Drive.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">2. A Jornada da Vaga (O Ciclo de Vida)</h3>
                <p style="margin: 0 0 10px 0;">Para dominar a ferramenta, você precisa entender o caminho que uma vaga faz desde que é encontrada até o momento em que o cliente faz a entrevista. O ciclo funciona assim:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>A Descoberta (Bastidores):</strong> Nossa inteligência (e equipe de captação) encontra uma vaga compatível com o cliente.</li>
                    <li style="margin-bottom: 5px;"><strong>Auditoria e Aprovação (Bastidores):</strong> A vaga passa por um filtro de qualidade da nossa equipe sênior e, em seguida, é validada para o cliente.</li>
                    <li style="margin-bottom: 5px;"><strong>Pendência (Sua vez!):</strong> Aprovada, a vaga "cai" na sua aba de Pendências. O sistema te avisa o que precisa ser feito: aplicar na vaga nos sites de emprego ou abordar o recrutador no LinkedIn.</li>
                    <li style="margin-bottom: 5px;"><strong>Follow-up (O Relacionamento):</strong> Após você realizar o 1º contato, a vaga sai das Pendências e vai para a aba Follows. É aqui que você vai atualizar os status ao longo dos dias (Ex: Aguardando Conexão, 2º Contato, Agendou Entrevista).</li>
                    <li style="margin-bottom: 5px;"><strong>A Finalização:</strong> Quando a vaga chega a um desfecho (seja uma entrevista agendada, um currículo enviado ou um processo congelado), você atualiza o status para "Finalizado", e o sistema a retira da sua visão diária para manter sua tela limpa.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">3. Lendo os Cartões de Vaga (O Raio-X do Cliente)</h3>
                <p style="margin: 0 0 10px 0;">Na Youp, nós trabalhamos com estratégia e dados. Por isso, as vagas não aparecem apenas como uma lista de links, mas sim em <strong>Cartões Estratégicos</strong>.</p>
                <p style="margin: 0 0 10px 0;">Quando você olhar para um cartão na sua tela (seja nas Pendências ou nos Follows), preste atenção nestes elementos vitais:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Cabeçalho Principal:</strong> Traz o Nome do Cliente, o Cargo alvo e o nome da Empresa.</li>
                    <li style="margin-bottom: 5px;"><strong>Score da IA:</strong> Uma "nota" (de 0 a 100) que o sistema deu para o nível de compatibilidade entre o currículo do nosso cliente e a descrição da vaga. Um score alto (90-100) significa que o cliente é o candidato dos sonhos daquela empresa!</li>
                    <li style="margin-bottom: 5px;"><strong>Falta (Hard/Soft Skills):</strong> O sistema aponta exatamente o que a vaga exige, mas que não está claro no perfil do cliente. <em>Dica de ouro: Use essa informação para orientar o cliente ou ajustar o currículo antes do envio!</em></li>
                </ul>
                
                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="font-size: 1.1em;">Caixas de Apoio (Resumo e Pitch):</strong><br><br>
                    <strong>Resumo do Perfil:</strong> Um texto rápido sobre quem é o cliente, suas principais forças e anos de experiência. Ideal para você relembrar o perfil antes de falar com o recrutador.<br><br>
                    <strong>Pitch de Contato:</strong> O texto/roteiro exato (desenhado pela Master) que você deve usar na hora de mandar a mensagem para o recrutador no LinkedIn. Basta copiar, colar e ajustar os nomes!
                </div>
            </div>
        `
    },


    {
        id: 2,
        trilha: "Gestão das Atividades",
        modulo: "Módulo 2: Ação Diária",
        titulo: "Limpando as Pendências: A Regra do Zero e Execução",
        resumo: "Aprenda a organizar sua rotina usando filtros de foco, executar candidaturas com precisão e dar o start no relacionamento com recrutadores.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">A regra de ouro do dia a dia é: Zero Pendências! 🎯</h2>
                <p style="margin: 0 0 15px 0;">Sempre que uma vaga é validada e aprovada para o cliente, ela aterrissa na sua aba <strong>PENDÊNCIAS</strong>. Pense nessa aba como a sua caixa de entrada de tarefas urgentes. O seu objetivo diário é entrar aqui, executar as ações e deixar essa tela completamente limpa.</p>
                <p style="margin: 0 0 15px 0;">Aqui, o sistema vai te pedir para fazer um de dois movimentos: <strong>Candidatura</strong> ou <strong>Contato</strong>. Vamos entender como organizar e executar cada um deles.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">1. Filtros de Foco: Organizando sua rotina</h3>
                <p style="margin: 0 0 10px 0;">Se você abrir a aba e der de cara com 30 pendências misturadas, não se assuste! O painel possui filtros inteligentes no topo da tela para você "fatiar" o seu trabalho e ganhar velocidade.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>📂 Filtrar Cliente:</strong> Quer focar em um assessorado por vez? Selecione o nome dele aqui e a tela vai esconder todos os outros. Assim você não precisa trocar de "chip mental" a cada 5 minutos.</li>
                    <li style="margin-bottom: 5px;"><strong>📋 Filtrar por Tipo:</strong> Aqui você escolhe se quer ver apenas as Candidaturas ou apenas os Contatos.</li>
                </ul>

                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #dcb560;">💡 Dica de Produtividade:</strong> É muito mais rápido você filtrar por "CANDIDATURA" e fazer todas as aplicações de vagas do dia primeiro, e depois filtrar por "CONTATO" para focar 100% na abordagem e relacionamento com recrutadores no LinkedIn.
                </div>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">2. Executando Tarefas do tipo: CANDIDATURA</h3>
                <p style="margin: 0 0 10px 0;">Quando o cartão da vaga estiver com a etiqueta cinza <strong>CANDIDATURA</strong>, significa que você precisa realizar a aplicação formal do cliente na vaga (seja na Gupy, Vagas.com, LinkedIn, etc.).</p>
                <p style="margin: 0 0 5px 0;"><strong>O Passo a Passo:</strong></p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Clique no botão azul <strong>🔗 LINK DA VAGA</strong> para abrir o site onde a vaga está hospedada.</li>
                    <li style="margin-bottom: 5px;">Faça o processo de candidatura usando os dados e o currículo do cliente.</li>
                    <li style="margin-bottom: 5px;">Volte para o Painel Youp e finalize a tarefa escolhendo uma das opções:
                        <ul style="margin-top: 5px; padding-left: 20px; list-style-type: circle;">
                            <li>Clique em <strong>REALIZADA</strong> (botão verde) se deu tudo certo.</li>
                            <li>Clique em <strong>NÃO REALIZADA</strong> (botão vermelho) caso a vaga já tenha sido fechada ou o link esteja fora do ar.</li>
                        </ul>
                    </li>
                </ul>
                <p style="margin: 0 0 15px 0; font-size: 0.9em; opacity: 0.9;"><em>Atenção: Em alguns projetos de parceria (vagas externas), você verá uma caixinha de texto extra. Se a plataforma gerar um status específico que você queira registrar, digite ali e clique em "Salvar Texto".</em></p>
                
                <p style="margin: 0 0 20px 0;"><strong>🚀 Mágica do Sistema:</strong> Assim que você clica no botão, o cartão desaparece da tela de Pendências e o sistema já carimba a data e hora do feito lá na planilha da Master.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">3. O Primeiro Contato (O Start do Relacionamento)</h3>
                <p style="margin: 0 0 10px 0;">Quando o cartão exibir a etiqueta <strong>CONTATO</strong>, sua missão é mais investigativa: você precisa encontrar o recrutador, o gestor da vaga ou o RH da empresa no LinkedIn e fazer a abordagem direta.</p>
                <p style="margin: 0 0 5px 0;"><strong>O Passo a Passo:</strong></p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Preparação:</strong> Leia o bloco verde <em>Resumo do Perfil</em> para refrescar a memória sobre os pontos fortes do cliente. Em seguida, leia o bloco azul <em>Pitch de Contato</em>. Ali está o roteiro da mensagem perfeita que a Master já preparou. Basta copiar!</li>
                    <li style="margin-bottom: 5px;"><strong>Abordagem:</strong> Clique no <strong>🔗 LINK DA VAGA</strong> para descobrir a empresa/recrutador e vá até o LinkedIn fazer a conexão e enviar o Pitch.</li>
                    <li style="margin-bottom: 5px;"><strong>Iniciando o Follow-up:</strong> Fez a abordagem? Ótimo! Agora clique no botão verde <strong>MARCAR CONTATO INICIADO</strong>.</li>
                </ul>

                <h3 style="font-size: 1.1em; margin: 20px 0 10px 0; font-weight: 700;">A Tela de Registro (O Modal)</h3>
                <p style="margin: 0 0 10px 0;">Ao clicar para iniciar o contato, uma janelinha vai se abrir. Preencha com atenção, pois é aqui que a vaga "nasce" para o relacionamento:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Cole o <strong>Link do Perfil Contatado</strong> (LinkedIn). Isso é crucial para você ou outro colega achar esse recrutador facilmente no futuro.</li>
                    <li style="margin-bottom: 5px;"><strong>Escolha o Status Inicial:</strong> Foi só um convite? Marque <em>Aguardando Conexão</em>. Já mandou a mensagem direto? Marque <em>1º Contato</em>.</li>
                    <li style="margin-bottom: 5px;">Clique em <strong>SALVAR</strong>.</li>
                </ul>

                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #dcb560;">🚀 Mágica do Sistema:</strong> Ao salvar, essa vaga "viaja" automaticamente da aba de Pendências e aterrissa na aba <strong>FOLLOWS</strong>. O trabalho inicial está feito, agora começa a gestão do relacionamento!
                </div>
            </div>
        `
    },



    {
        id: 3,
        trilha: "Gestão das Atividades",
        modulo: "Módulo 3: A Arte do Follow-up",
        titulo: "Onde a mágica acontece: CRM de Vagas, Cadência e SLAs",
        resumo: "Domine o funil de relacionamento. Aprenda a avançar status, gerenciar a 'Regra dos 3 Dias' e usar estratégias de Plano B (Add Contato) para garantir entrevistas.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">O verdadeiro trabalho do Job Hunter mora aqui! 🌟</h2>
                <p style="margin: 0 0 15px 0;">Se a aba de Pendências é a sua caixa de entrada, a aba de <strong>FOLLOWS</strong> é o seu funil de relacionamento (o nosso CRM). É aqui que a mágica das negociações acontece, onde as conversas com o mercado de trabalho se desenrolam e as entrevistas são conquistadas.</p>
                <p style="margin: 0 0 15px 0;">Neste módulo, você vai aprender a gerenciar essa esteira de contatos para garantir que nenhum candidato fique sem resposta.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">1. Conhecendo a Aba de Follows</h3>
                <p style="margin: 0 0 10px 0;">Sempre que você inicia um contato lá nas Pendências, a vaga se muda automaticamente para cá. O cartão da vaga na aba Follows é um pouco diferente, pois ele foi pensado para te dar agilidade na operação do dia a dia:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Links Duplos:</strong> Agora você tem o link da Vaga original e o link do Perfil do Recrutador (LinkedIn) lado a lado.</li>
                    <li style="margin-bottom: 5px;"><strong>Contexto Imediato:</strong> O <em>Resumo do Perfil</em> e o <em>Pitch de Contato</em> continuam visíveis para você não precisar abrir planilhas secundárias na hora de mandar a segunda ou terceira mensagem de follow-up.</li>
                    <li style="margin-bottom: 5px;"><strong>Acompanhamento de Status:</strong> Um menu suspenso (dropdown) na parte inferior do cartão permite que você mude a etapa do processo com um único clique.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">2. Gestão de Status e Cadência (Avançando as casas)</h3>
                <p style="margin: 0 0 10px 0;">O segredo de um bom follow-up é a cadência. Você não deve mandar mensagens todos os dias sendo inoportuno, mas também não pode esquecer do recrutador que visualizou e não respondeu.</p>
                <p style="margin: 0 0 5px 0;"><strong>Como atualizar:</strong> Sempre que você for ao LinkedIn e fizer uma nova interação, volte ao Painel Youp e mude o status no cartão da vaga.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">O contato aceitou o convite e você mandou o currículo? Mude de <em>Aguardando Conexão</em> para <strong>1º Contato</strong>.</li>
                    <li style="margin-bottom: 5px;">Deixou uma nova mensagem lembrando o recrutador após alguns dias? Mude para <strong>2º Contato</strong> ou <strong>3º Contato</strong>.</li>
                </ul>
                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #dcb560;">💡 Mágica do Sistema:</strong> Cada vez que você seleciona um novo status no cartão, o painel registra a data e a hora exatas dessa ação no histórico central. Você não precisa digitar nada, o sistema documenta o seu trabalho sozinho e avisa a Master!
                </div>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700; color: #e74c3c;">3. A Regra dos 3 Dias (SLA de Atraso) 🚨</h3>
                <p style="margin: 0 0 10px 0;">Esta é a regra mais rigorosa da nossa gestão de clientes: <strong>Nenhuma vaga pode ficar esquecida no funil.</strong></p>
                <p style="margin: 0 0 10px 0;">O sistema possui um relógio interno implacável. Se você deixar um cartão de vaga sem nenhuma alteração de status por <strong>3 dias ou mais</strong>, o painel vai disparar um alerta visual para você e para a gestão:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px; color: #e74c3c;">O cartão da vaga vai ficar destacado com a borda vermelha.</li>
                    <li style="margin-bottom: 5px;">Um aviso piscante surgirá no canto da vaga: <strong>"⚠️ PARADO HÁ X DIAS"</strong>.</li>
                    <li style="margin-bottom: 5px;">A Master verá esse exato atraso contabilizado na Dashboard geral dela.</li>
                </ul>
                <p style="margin: 0 0 15px 0;"><strong>Como resolver a pendência:</strong> Vá até o LinkedIn, faça a nova abordagem estratégica (ou defina que aquele contato realmente não rendeu e mude a tática) e atualize o status no painel. O relógio zera instantaneamente e a cor vermelha desaparece!</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">4. O Botão "➕ Adicionar Outro Contato" (O Plano B)</h3>
                <p style="margin: 0 0 10px 0;">E se você mandou mensagem para o Analista de RH, passou uma semana e ele não respondeu, nem aceitou a conexão? Você não desiste da vaga! Você parte para o Plano B (buscando o Gestor da área, o Diretor, ou outro tech recruiter da mesma empresa).</p>
                <p style="margin: 0 0 5px 0;">Para não perder o histórico de quem você já tentou falar, não apague e nem altere o link antigo.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Clique no botão <strong>"➕ Adicionar Outro Contato"</strong> no próprio cartão da vaga travada.</li>
                    <li style="margin-bottom: 5px;">O painel vai abrir aquela mesma janelinha de início de contato.</li>
                    <li style="margin-bottom: 5px;">Cole o link do LinkedIn desse novo profissional que você mapeou e marque o status inicial.</li>
                    <li style="margin-bottom: 5px;">O sistema vai criar um cartão "gêmeo" para você acompanhar esse novo alvo paralelamente, preservando todo o seu esforço anterior.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">5. Visão Limpa vs. Ver Finalizados</h3>
                <p style="margin: 0 0 10px 0;">Para que você não tenha fadiga visual com uma tela lotada de dezenas de vagas velhas, nós criamos um filtro inteligente de organização.</p>
                <p style="margin: 0 0 10px 0;">Por padrão, todos os status que encerram o fluxo de prospecção ativa ficam ocultos da sua visão diária. São eles: <em>Enviou Currículo, Agendou Entrevista, Negativa/Reprovado, Vaga Finalizada, Processo Congelado, Contato Finalizado, Não Realizado</em>.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Quer ver as vitórias ou revisar o que foi fechado? É só clicar na chavinha <strong>"Ver Finalizados"</strong> no topo da tela, no canto direito.</li>
                    <li style="margin-bottom: 5px;">Se você usar a barra de pesquisa superior para filtrar um desses status finais diretamente (ex: Filtrar apenas por "Agendou Entrevista"), o painel é esperto o suficiente para ligar essa chavinha sozinho e exibir os resultados ocultos.</li>
                </ul>
            </div>
        `
    },

    {
        id: 4,
        trilha: "Gestão das Atividades",
        modulo: "Módulo 4: Finalização e Evidências",
        titulo: "Fechando o Ciclo: Evidências e Histórico Vivo",
        resumo: "Onde provamos o nosso valor! Aprenda a registrar desfechos de vagas, usar o Uploader automatizado para salvar prints e consultar o Arquivo do cliente.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1507925922837-cb26431e7804?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">Onde provamos o nosso valor! 🏆</h2>
                <p style="margin: 0 0 15px 0;">Todo processo tem um início, meio e fim. O objetivo final do nosso trabalho é gerar oportunidades reais para os assessorados. Neste módulo, você vai entender como registrar os desfechos das vagas, documentar o seu trabalho com evidências (os famosos prints) e consultar o histórico completo de tudo que já foi feito.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">1. Dando o "Xeque-Mate" (Status de Fechamento)</h3>
                <p style="margin: 0 0 10px 0;">Como vimos no módulo anterior, o painel oculta automaticamente as vagas que chegam ao fim do funil para manter a sua tela limpa. Mas o que significa cada um desses status finais? Quando você deve usá-los na aba de Follows?</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>🎯 Agendou Entrevista:</strong> O nosso objetivo principal! Use quando o recrutador convidar o cliente para um papo.</li>
                    <li style="margin-bottom: 5px;"><strong>📄 Enviou Currículo:</strong> Quando o recrutador pede o CV para análise, mas ainda não marcou a entrevista. (<em>Atenção: algumas vagas podem morrer aqui se o CV não for aprovado, então fique de olho para atualizar depois, se necessário</em>).</li>
                    <li style="margin-bottom: 5px;"><strong>❌ Negativa/Reprovado:</strong> Quando o recrutador responde informando que o perfil não seguiu no processo.</li>
                    <li style="margin-bottom: 5px;"><strong>🧊 Processo Congelado:</strong> Quando a empresa informa que a vaga foi suspensa temporariamente.</li>
                    <li style="margin-bottom: 5px;"><strong>🔒 Vaga Finalizada:</strong> Quando a empresa fecha a posição com outro candidato.</li>
                    <li style="margin-bottom: 5px;"><strong>🛑 Contato Finalizado / Não Realizado:</strong> Quando você esgotou as tentativas de contato (Plano A, B e C) sem sucesso, ou percebeu que a vaga não faz mais sentido.</li>
                </ul>
                
                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #dcb560;">💡 Mágica do Sistema:</strong> Ao selecionar qualquer um desses status, o relógio de atraso (a regra dos 3 dias) é desligado permanentemente e a vaga sai da sua lista de pendências diárias.
                </div>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">2. Uploader de Evidências (A Prova do Trabalho)</h3>
                <p style="margin: 0 0 10px 0;">Transparência é um dos pilares da Youp. O cliente precisa saber que estamos lutando por ele todos os dias. Para isso, usamos a aba <strong>UPLOADER</strong> para salvar os "prints" (capturas de tela) das mensagens enviadas no LinkedIn, e-mails ou confirmações de candidatura.</p>
                <p style="margin: 0 0 5px 0;"><strong>O Passo a Passo à Prova de Erros:</strong></p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Acesse a aba <strong>UPLOADER</strong> no menu superior.</li>
                    <li style="margin-bottom: 5px;"><strong>As 3 Travas Inteligentes:</strong> O sistema organiza as pastas perfeitamente. Primeiro, selecione o <strong>1. Cliente</strong>. Só depois disso a caixinha de <strong>2. Empresa</strong> será liberada. Escolha a empresa e, por fim, selecione a <strong>3. Vaga/Cargo</strong>.</li>
                    <li style="margin-bottom: 5px;"><strong>Anexando os Prints:</strong> Clique na área tracejada para procurar os arquivos no seu computador, ou simplesmente arraste e solte as imagens ali dentro.</li>
                    <li style="margin-bottom: 5px;">Você verá uma miniatura de cada print que anexou (se colocou algum errado, é só clicar no "X" vermelho para remover).</li>
                    <li style="margin-bottom: 5px;">Clique no botão verde <strong>ENVIAR ARQUIVOS</strong> e aguarde a barra de progresso.</li>
                </ul>

                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #dcb560;">🚀 Mágica do Sistema:</strong> Esqueça a bagunça de arquivos perdidos! Ao clicar em Enviar, o painel vai até o Google Drive, procura a pasta do Cliente, cria uma subpasta com o nome da Empresa, cria outra subpasta com o nome da Vaga, e salva o seu print lá dentro, já renomeado com o seu e-mail funcional. Tudo no piloto automático!
                </div>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">3. A Aba Arquivo (O Histórico Vivo)</h3>
                <p style="margin: 0 0 10px 0; font-style: italic;">"Será que já aplicamos o João para essa vaga de Gerente no Itaú semana passada?"</p>
                <p style="margin: 0 0 10px 0;">Para evitar trabalho duplicado ou candidaturas repetidas que pegam mal no mercado, você tem a aba <strong>ARQUIVO</strong>.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>O que vem para cá?</strong> Toda vez que você estiver lá na aba de Pendências e clicar em "REALIZADA" ou "NÃO REALIZADA" para uma tarefa de Candidatura, o cartão dela se muda imediatamente para o Arquivo.</li>
                    <li style="margin-bottom: 5px;">Use o filtro <strong>📂 Filtrar Cliente (Arquivo)</strong> para puxar a "capivara" completa de tudo que já foi aplicado para aquele assessorado específico.</li>
                    <li style="margin-bottom: 5px;">Além do histórico, você tem um botão de atalho para acessar a vaga original diretamente dessa tela, caso precise conferir algum detalhe antigo da descrição do cargo.</li>
                </ul>
            </div>
        `
    },

    {
        id: 5,
        trilha: "Gestão das Atividades",
        modulo: "Módulo 5: Garantia de Qualidade",
        titulo: "Visão Master: Triagem Fina, Repescagem e Controle de Fluxo",
        resumo: "Exclusivo para Seniores: aprenda a operar o Coletor, realizar o Pente Fino da Auditoria, destravar vagas paradas com o cliente e usar a edição em massa do Master View.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">A Torre de Controle da Youp! 🦅</h2>
                <p style="margin: 0 0 15px 0;">Se você chegou até aqui e possui acesso a estas abas, significa que você tem um papel fundamental na estratégia e na qualidade do nosso serviço. O sistema oculta essas abas da equipe operacional para manter o foco deles, liberando essas ferramentas apenas para E-mails de Auditores e para a conta Master.</p>
                <p style="margin: 0 0 15px 0;">Neste módulo, vamos entender como funciona a triagem fina das vagas, a repescagem e o controle total da operação.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">1. O Coletor (A Primeira Barreira)</h3>
                <p style="margin: 0 0 10px 0;">Antes de uma vaga ser analisada a fundo, ela cai no <strong>COLETOR</strong>. Esta aba funciona como um "Tinder" das vagas: é um filtro extremamente rápido para limpar a sujeira do que foi importado pelas automações.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Como usar:</strong> Você verá uma lista simples com o título da vaga e o link. Seu objetivo é apenas dar uma olhada rápida e clicar em <strong>SIM</strong> (faz sentido, pode seguir no fluxo) ou <strong>NÃO</strong> (descarte imediato).</li>
                    <li style="margin-bottom: 5px;">Use o filtro de data no topo para focar apenas nas captações do dia.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">2. Auditoria (O Pente Fino)</h3>
                <p style="margin: 0 0 10px 0;">As vagas que passaram pelo Coletor (ou captações internas) chegam na aba de <strong>AUDITORIA</strong>. É aqui que garantimos o padrão de qualidade Youp antes da vaga ir para a aprovação do cliente ou para a mesa do analista.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Análise de Dados:</strong> O cartão de Auditoria é o mais rico do sistema. Ele cruza o Resumo do Perfil do cliente com os dados da vaga.</li>
                    <li style="margin-bottom: 5px;"><strong>O que avaliar:</strong>
                        <ul style="margin-top: 5px; padding-left: 20px; list-style-type: circle;">
                            <li><strong>Score IA:</strong> A nota de compatibilidade (0 a 100).</li>
                            <li><strong>Senioridade e Salário:</strong> Estão alinhados com o momento do cliente?</li>
                            <li><strong>Falta Hard/Soft Skills:</strong> O sistema destaca em vermelho e amarelo o que a vaga pede, mas o cliente não tem no perfil.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 5px;"><strong>Ação:</strong> Se o link estiver quebrado, você pode corrigi-lo e testá-lo na mesma hora. Estando tudo perfeito, clique em <strong>APROVAR</strong>. Caso a vaga não faça sentido após essa análise profunda, clique em <strong>REPROVAR</strong>.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">3. Repescagem (A Segunda Chance)</h3>
                <p style="margin: 0 0 10px 0;">Errar faz parte! Se você reprovou uma vaga na Auditoria por engano, ou se o link estava quebrado e você conseguiu o link correto depois, não se preocupe: a vaga não foi excluída, ela foi para a aba de <strong>REPESCAGEM</strong>.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Acesse a aba, filtre pelo cliente, cole o link corrigido e clique em <strong>RESGATAR VAGA (APROVAR)</strong>. Ela voltará para o fluxo normal de pendências instantaneamente.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">4. Cl. Aguarda (Destravando o Fluxo)</h3>
                <p style="margin: 0 0 10px 0;">Algumas vagas, após serem auditadas, vão para a aprovação do próprio cliente. Se o cliente demorar muito para responder, o fluxo da equipe fica travado.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">A aba <strong>CL. AGUARDA</strong> lista todas as vagas que estão paradas na mão do assessorado.</li>
                    <li style="margin-bottom: 5px; color: #e74c3c;"><strong>Alerta de Atraso:</strong> Se passar de 3 dias, o sistema pisca um alerta vermelho para a Master.</li>
                    <li style="margin-bottom: 5px;"><strong>Aprovação Forçada:</strong> A Master pode analisar a vaga e usar os botões para aprovar ou reprovar a vaga no lugar do cliente, destravando a tarefa e enviando-a imediatamente para a equipe trabalhar.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">5. Master View e Edição em Massa (O Centro de Comando)</h3>
                <p style="margin: 0 0 10px 0;">A aba <strong>MASTER VIEW</strong> é o painel de instrumentos da gestão. Aqui você tem a visão do todo: quantas vagas estão com currículos enviados, quantas entrevistas marcadas e, o mais importante, quantas vagas estão paradas há mais de 3 dias.</p>
                <p style="margin: 0 0 5px 0;"><strong>O Modo Turbo (Edição em Massa):</strong> Precisa atualizar 20 vagas do mesmo cliente de uma vez só?</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Filtre a tela pelo nome do Cliente ou do Analista.</li>
                    <li style="margin-bottom: 5px;">Marque as "caixinhas" (checkbox) ao lado de cada vaga (ou clique em "Selecionar Todos" na barra flutuante que vai aparecer).</li>
                    <li style="margin-bottom: 5px;">Na barra flutuante, escolha o novo status e clique em <strong>APLICAR</strong>. O sistema atualizará todas as vagas simultaneamente em 1 segundo!</li>
                </ul>

                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #dcb560;">A Regra de Ouro (Apoio da Master):</strong><br>
                    Se a Master alterar individualmente ou em massa o status de uma vaga que pertence a um analista (ex: para 2º Contato), o sistema <strong>NÃO</strong> rouba a titularidade da vaga. O histórico apenas registra <em>"👩‍💼 Apoio da Master: 2º Contato"</em> e zera o atraso. O analista continua responsável pela vaga e verá a sua ajuda no histórico! <em>(Nota: Isso só não se aplica para status finais, como "Enviou Currículo", que encerram o fluxo para todos).</em>
                </div>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">6. Setup (Configurações em Tempo Real)</h3>
                <p style="margin: 0 0 10px 0;">Chegou um cliente novo? Mudou o analista responsável? Tudo é resolvido na aba <strong>SETUP</strong>.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Basta selecionar "CADASTRAR NOVO CLIENTE", preencher os dados, escolher quem será o analista de Candidatura e os de Contato, colar o Resumo do Perfil e salvar. O sistema cria toda a estrutura do cliente na mesma hora, sem precisar abrir planilhas!</li>
                </ul>
            </div>
        `
    },

{
        id: 6,
        trilha: "Gestão de Atividades",
        modulo: "Módulo Final",
        titulo: "Certificação Operacional Youp",
        resumo: "Avaliação de competências para liberação do ecossistema Youp.",
        linkVideo: "",
        conteudo: `
            <h3>Parabéns por chegar até aqui!</h3>
            <p>Esta trilha consolidou os pilares da nossa operação: Checklist, Gestão de Carteira, Inteligência de Mercado e Atendimento Executivo.</p>
            <p><b>Regras da Certificação:</b></p>
            <ul>
                <li>Total de perguntas: 10</li>
                <li>Média para aprovação: 80% (8 acertos)</li>
                <li>Recompensa: Certificado Digital + Acesso ao Aplicativo Youp.</li>
            </ul>
            <p>Prepare-se e boa sorte!</p>
        `,
        questoes: [
            // Módulo 1: Organização e Processos
            {
                pergunta: "Qual é o objetivo primordial da atualização em tempo real do checklist de tarefas no hub?",
                opcoes: ["Apenas controle administrativo", "Evitar que a Ana Paula precise cobrar prazos", "Garantir a transparência da operação e agilidade no follow-up com o assessorado", "Cumprir uma formalidade do sistema", "Preencher o tempo ocioso entre reuniões"],
                correta: 2
            },
            {
                pergunta: "Ao identificar um atraso em uma entrega crítica, qual a conduta padrão Youp?",
                opcoes: ["Ignorar e tentar compensar no dia seguinte", "Informar imediatamente a gestão com uma solução ou novo prazo proposto", "Esperar o cliente reclamar para se manifestar", "Apagar a tarefa do checklist", "Pedir para outro consultor assumir sem avisar ninguém"],
                correta: 1
            },
            // Módulo 2: Gestão de Clientes (Carteira)
            {
                pergunta: "Na Youp, como definimos a 'Gestão de Carteira' de um consultor?",
                opcoes: ["Uma lista de nomes para enviar e-mails prontos", "Um processo passivo de espera por vagas", "A curadoria estratégica de cada assessorado, tratando cada carreira como um projeto único", "O preenchimento de planilhas de contatos", "A prospecção de qualquer tipo de vaga de nível operacional"],
                correta: 2
            },
            {
                pergunta: "Como deve ser o acompanhamento (follow-up) com um cliente C-Level?",
                opcoes: ["Informal e frequente, via áudios longos", "Distante, enviando relatórios apenas uma vez por mês", "Cirúrgico, elegante, focado em avanços concretos e métricas de mercado", "Reativo, respondendo apenas quando solicitado", "Baseado em mensagens motivacionais diárias"],
                correta: 2
            },
            // Módulo 3: Inteligência de Mercado (Hunting)
            {
                pergunta: "Sobre o 'Mercado Oculto', qual o papel fundamental do consultor Youp?",
                opcoes: ["Aguardar que as vagas apareçam no LinkedIn", "Mapear oportunidades não publicadas através de hunting estratégico e networking", "Cadastrar o cliente em sites de emprego comuns", "Pedir ao cliente que procure suas próprias vagas", "Focar apenas em concursos públicos"],
                correta: 1
            },
            {
                pergunta: "Ao indicar uma vaga para o Hub da Youp, o que deve ser priorizado?",
                opcoes: ["A quantidade de vagas, independente do perfil", "Vagas que paguem comissões rápidas", "A aderência da oportunidade com o perfil dos assessorados ativos na casa", "Apenas vagas internacionais", "Vagas publicadas em portais de notícias"],
                correta: 2
            },
            // Módulo 4: Comunicação e Reputação
            {
                pergunta: "O 'Tom de Voz Letal' mencionado na cultura Youp refere-se a:",
                opcoes: ["Ser agressivo com os recrutadores", "Falar muito rápido para demonstrar agilidade", "Uma comunicação precisa, direta, altamente profissional e orientada a resultados", "Usar termos técnicos em inglês o tempo todo", "Falar pouco para parecer misterioso"],
                correta: 2
            },
            {
                pergunta: "Como tratamos a confidencialidade dos dados dos nossos clientes?",
                opcoes: ["Pode ser compartilhada com parceiros externos sem aviso", "É relativa, dependendo da importância do cargo", "É blindada e absoluta, sendo um dos nossos maiores ativos de confiança", "Apenas dados financeiros são sigilosos", "É aberta apenas para outros clientes da casa"],
                correta: 2
            },
            // Módulo 5: Entrega e Performance
            {
                pergunta: "O que caracteriza uma entrega de 'Excelência' no reposicionamento executivo?",
                opcoes: ["Entregar o currículo no prazo, mesmo com erros", "Superar as expectativas do cliente com insights de mercado e preparação de alto nível", "Apenas garantir que o cliente seja entrevistado", "Fazer o que o cliente pede, mesmo que ele esteja errado estrategicamente", "Delegar todas as tarefas para o suporte"],
                correta: 1
            },
            {
                pergunta: "Qual a importância do feedback do consultor para a inteligência do hub?",
                opcoes: ["Nenhuma, o sistema é automatizado", "Serve apenas para avaliação de desempenho individual", "Alimenta o banco de dados para que a Youp entenda tendências de mercado e ajuste estratégias", "É opcional, dependendo da vontade do consultor", "Serve para justificar falhas no processo"],
                correta: 2
            }
        ]
    },
    

    {
        id: 7,
        trilha: "Gestão dos Clientes",
        modulo: "Módulo 1: Primeiros Passos",
        titulo: "Visão Geral e a Magia dos Papéis de Acesso",
        resumo: "Entenda o conceito do Youp Gestão como nossa casa digital, como acessar a plataforma e a segurança por trás dos papéis de acesso (Busca, Cadastro, Contato e Admin).",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">O que é o Youp Gestão? 🌐</h2>
                <p style="margin: 0 0 15px 0;">Pensem no Youp Gestão como a nossa "casa digital" e o cérebro das nossas operações. Antes, as informações podiam ficar espalhadas; agora, tudo o que vocês precisam para atuar de forma cirúrgica está em um só lugar. O objetivo aqui é ganhar tempo, evitar perda de dados e focar no que realmente importa: resultados.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">Como acessar a plataforma</h3>
                <p style="margin: 0 0 15px 0;">Vocês receberão um link seguro para acessar a ferramenta direto no navegador (pode ser pelo computador ou celular). A primeira tela que verão é a de Login. Basta inserir o seu e-mail cadastrado na Youp e a sua senha, e clicar em <strong>"ENTRAR"</strong>.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">A Magia dos Papéis de Acesso</h3>
                <p style="margin: 0 0 10px 0;">A ferramenta é inteligente e focada em segurança. Quando você faz login, o sistema reconhece automaticamente qual é o seu papel (Analista Busca, Cadastro, Contato ou Admin). O que isso significa na prática?</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Você só verá os clientes que foram atribuídos a você.</li>
                    <li style="margin-bottom: 5px;">Você só verá as informações pertinentes ao seu trabalho. Se você não lida com o <em>Cadastro</em> do cliente, os dados sensíveis e senhas dele estarão bloqueados para você. Isso protege a empresa, o cliente e organiza a sua mente!</li>
                </ul>
            </div>
        `
    },
    {
        id: 8,
        trilha: "Gestão dos Clientes",
        modulo: "Módulo 2: Dominando o Painel",
        titulo: "Dashboard, Filtros e Organização Visual",
        resumo: "Como navegar na tela inicial, usar a barra de pesquisa em tempo real, aplicar filtros de status para manter o foco e garantir a segurança ao sair.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">A Tela Inicial (Dashboard) 🗂️</h2>
                <p style="margin: 0 0 15px 0;">Assim que você faz o login com sucesso, entrará no "Painel de Clientes". Aqui, você verá cartões (cards) para cada cliente atribuído a você. Cada cartão mostra rapidamente o Nome, a Data de Entrada e o Status atual dele (Pendente, Concluído, etc.).</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">Buscando e Filtrando</h3>
                <p style="margin: 0 0 10px 0;">No topo direito da tela, temos duas ferramentas de ouro para organização:</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;"><strong>Barra de Pesquisa:</strong> Digite parte do nome do cliente e a lista será filtrada em tempo real.</li>
                    <li style="margin-bottom: 5px;"><strong>Filtro de Status:</strong> Por padrão, o sistema oculta clientes "Inativos" para manter a sua tela limpa, focando apenas em quem está ativo. Se precisar buscar o histórico de um cliente antigo, basta mudar este filtro para "Apenas Inativos" ou "Mostrar Todos".</li>
                </ul>

                <div style="border-left: 3px solid #e74c3c; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0;">
                    <strong style="color: #e74c3c;">Saindo com Segurança:</strong><br>
                    Terminou o expediente ou vai dividir o computador com alguém? Clique no botão vermelho <strong>"Sair"</strong> no canto superior direito para deslogar e proteger os dados.
                </div>
            </div>
        `
    },
    {
        id: 9,
        trilha: "Gestão dos Clientes",
        modulo: "Módulo 3: A Ficha do Cliente",
        titulo: "O Coração do Trabalho: Abas de Busca, Cadastro, Pitch e CV",
        resumo: "Navegue pelo raio-X do cliente. Descubra onde ficam as Hard/Soft Skills, como copiar senhas com um clique, e acesse o roteiro de vendas (Pitch) e o currículo oficial.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">O Coração do Trabalho ❤️</h2>
                <p style="margin: 0 0 15px 0;">Ao clicar no cartão de um cliente, uma janela completa se abrirá. É aqui que o seu trabalho acontece.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">O Cabeçalho Inteligente</h3>
                <p style="margin: 0 0 15px 0;">Logo no topo, ao lado do nome do cliente, vocês notarão ícones rápidos. Se o cliente tiver o link da pasta do Drive ou do perfil do LinkedIn cadastrados, botões azuis aparecerão ali. É só clicar para abrir diretamente em outra aba, sem precisar ficar caçando links!</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">As 4 Abas de Trabalho:</h3>
                
                <h4 style="font-size: 1.1em; margin: 15px 0 5px 0; font-weight: 700;">1. Aba BUSCA (Estratégia)</h4>
                <p style="margin: 0 0 15px 0;">É a estratégia pura. Aqui estão as informações de "Onde estamos" e "Para onde vamos". Vocês encontrarão o cargo atual, os cargos desejados, pretensão salarial, cidades-alvo e, o mais importante, um mapa completo das Hard Skills (habilidades técnicas), Soft Skills (comportamento) e idiomas do candidato.</p>

                <h4 style="font-size: 1.1em; margin: 15px 0 5px 0; font-weight: 700;">2. Aba CADASTRO (Acesso Restrito)</h4>
                <p style="margin: 0 0 10px 0;">Se o seu perfil tiver permissão, esta aba revelará os dados pessoais do cliente. O grande destaque aqui são os <strong>Logins</strong>. O sistema exibe o acesso do cliente ao LinkedIn, Gupy e E-mail.</p>
                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 15px 0;">
                    <strong style="color: #dcb560;">💡 Dica de Ouro:</strong> Notou um ícone de "duas folhinhas" ao lado das senhas? Basta clicar nele para copiar a informação na hora! Nunca mais corra o risco de digitar uma senha errada.
                </div>

                <h4 style="font-size: 1.1em; margin: 15px 0 5px 0; font-weight: 700;">3. Aba PITCH (Venda)</h4>
                <p style="margin: 0 0 15px 0;">Feita para brilhar os olhos dos recrutadores e empresas. Aqui ficam os maiores trunfos do cliente: Retorno sobre Investimento (ROI), sua Proposta Única de Valor (USP) e seus principais KPIs. É o seu roteiro de argumentação de vendas.</p>

                <h4 style="font-size: 1.1em; margin: 15px 0 5px 0; font-weight: 700;">4. Aba CV FINAL</h4>
                <p style="margin: 0 0 15px 0;">O documento oficial criado pela Youp. Aqui vocês visualizam os links da versão final do currículo e o texto completo elaborado para o cliente. Usem o botão <strong>"COPIAR TUDO"</strong> para levar esse texto rapidamente para a Gupy ou outras plataformas de vagas.</p>
            </div>
        `
    },
    {
        id: 10,
        trilha: "Gestão dos Clientes",
        modulo: "Módulo 4: Rotina, Comunicação e Registros",
        titulo: "Diário de Bordo e Comunicação com a Gestão",
        resumo: "Como manter a equipe alinhada registrando históricos na aba Diário e como usar a aba ADMIN para reportar urgências diretamente para a administração.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">A Comunicação Documentada 📝</h2>
                <p style="margin: 0 0 15px 0;">O trabalho em equipe exige uma comunicação perfeita e documentada. O sistema possui duas abas fundamentais para garantir que nenhuma informação se perca pelo caminho.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">Aba DIÁRIO</h3>
                <p style="margin: 0 0 10px 0;">É o nosso bloco de notas confidencial. Fez uma entrevista em nome do cliente? Atualizou a senha dele? Alterou alguma estratégia? Escreva na caixa de texto e clique em <strong>"Salvar Registro"</strong>.</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">O sistema carimba automaticamente o seu nome, a data e a hora.</li>
                    <li style="margin-bottom: 5px;">Esse diário é visível apenas para quem atende esse cliente e para a Gestão, mantendo o alinhamento de todos os envolvidos na conta.</li>
                </ul>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">Aba ADMIN</h3>
                <p style="margin: 0 0 10px 0;">Encontrou um problema grave? O cliente pediu urgência em algo?</p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Escreva nesta aba e clique em <strong>"ENVIAR REPORT"</strong>.</li>
                    <li style="margin-bottom: 5px;">O sistema enviará, na mesma hora, um e-mail direto para a caixa de entrada da Administração com o seu nome, o nome do cliente e a sua mensagem. Usem com sabedoria para destravar impedimentos urgentes!</li>
                </ul>
            </div>
        `
    },
    {
        id: 11,
        trilha: "Gestão dos Clientes",
        modulo: "Módulo 5: Visão da Gestão",
        titulo: "Exclusivo para ADMINS: O Lápis Mágico e Atribuição de Equipes",
        resumo: "Conheça os 'superpoderes' dos Administradores: edição inline de dados, alteração de status do cliente, gestão da equipe de atendimento e edição do CV Final.",
        linkVideo: "", 
        imagem: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <h2 style="font-size: 1.4em; margin: 0 0 15px 0; font-weight: 700;">A Visão da Gestão 🦅</h2>
                <p style="margin: 0 0 15px 0;">Se você tem o perfil de ADMIN (Administrador), você possui "poderes" especiais na plataforma para orquestrar o trabalho da equipe.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">O Lápis Mágico (Edição Rápida)</h3>
                <p style="margin: 0 0 15px 0;">Para os administradores, quase toda informação de texto na ficha do cliente terá um pequeno ícone de "lápis" ao lado (✏️). Viu um erro de digitação ou precisa atualizar o salário do cliente? Clique no lápis, digite o novo valor e aperte <strong>OK</strong>. O sistema salva na planilha instantaneamente, sem que você precise sair da plataforma.</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">Gerenciamento de Status e Equipe</h3>
                <p style="margin: 0 0 10px 0;">No cabeçalho do cliente, o Admin não apenas vê o status, mas pode alterá-lo (Pendente, Concluído, Inativo) através de um menu suspenso.</p>
                <p style="margin: 0 0 15px 0;">Logo ao lado, há o botão roxo <strong>"Equipe"</strong>. Ao clicar nele, você define exatamente quais consultoras (digitando o e-mail delas) cuidarão da Busca, do Cadastro e do Contato daquele cliente. É isso que destrava a ficha na tela delas!</p>

                <h3 style="font-size: 1.2em; margin: 25px 0 10px 0; font-weight: 700;">Edição de CV e Exclusão</h3>
                <ul style="margin: 0 0 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 5px;">Na aba <strong>"CV FINAL"</strong>, apenas o Admin vê o botão verde "SALVAR ALTERAÇÕES", permitindo ajustar o texto do currículo oficial pela própria plataforma sem precisar ir no Google Docs/Drive.</li>
                    <li style="margin-bottom: 5px; color: #e74c3c;">Por fim, no topo da ficha, há um ícone de <strong>lixeira vermelha</strong>. Ele serve para excluir um cliente permanentemente do banco de dados (use com extrema cautela!).</li>
                </ul>
            </div>
        `
    }
];
