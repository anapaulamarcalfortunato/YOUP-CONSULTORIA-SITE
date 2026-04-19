// Este é o seu Banco de Dados de Materiais. 
// Para adicionar um novo, basta copiar um bloco entre as chaves { } e colar abaixo, separando por vírgula.

const materiaisYoup = [
    {
            id: 3, // Substitua pelo próximo número da sua sequência
        categoria: "Carreira",
        data: "19/04/2026",
        tempoLeitura: "5 min",
        titulo: "O Conselho Não Quer Respostas, Quer uma Tese: Como Dominar a Sabatina da Diretoria",
        slug: "como-dominar-entrevista-diretoria-conselho",
        resumo: "Entrevistas C-Level não são sobre o seu passado, são sobre a previsibilidade do seu futuro. Aprenda a parar de recitar o currículo e comece a mitigar o risco do acionista.",
        imagem: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div class="artigo-container" style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <p style="font-size: 1.1em; font-weight: 600; margin: 0 0 15px 0;">A transição da média para a alta liderança exige o abandono de um hábito perigoso: a crença de que você está lá para provar que sabe "fazer". Em uma entrevista com o Conselho de Administração ou com a Diretoria Estatutária, a sua capacidade de execução já foi validada pelos Headhunters. O jogo agora é outro.</p>
                
                <p style="margin: 0 0 15px 0;">O Conselho não quer saber *como* você opera a máquina; eles querem saber se você tem o faro fiduciário para decidir *em qual direção* a máquina deve ir, e se você tem a maturidade emocional para não quebrar a cultura no processo. Se você entrar na sala para recitar o seu currículo, você já perdeu a vaga.</p>

                <h2 style="font-size: 1.4em; margin: 25px 0 10px 0; font-weight: 700;">A Mudança de Frequência: Da Tática para a Tese</h2>
                <p style="margin: 0 0 15px 0;">O erro fatal do executivo brilhante é responder às perguntas do Chairman com métricas táticas. Quando questionado sobre um desafio de Go-to-Market, o candidato mediano detalha ferramentas e processos. O candidato nível CEO responde com uma tese de risco e retorno.</p>

                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 20px 0; font-style: italic; font-size: 1em;">
                    "O Conselho não contrata o seu passado. Eles compram a previsibilidade e a segurança do seu futuro. Você não é um candidato; você é um ativo em avaliação de risco."
                </div>

                <h2 style="font-size: 1.4em; margin: 25px 0 10px 0; font-weight: 700;">O Framework dos 90 Dias</h2>
                <p style="margin: 0 0 15px 0;">Não espere ser sabatinado. Assuma o controle da mesa nos primeiros 10 minutos apresentando o seu "Plano de 90 Dias". Leia os balanços da empresa, entenda as dores do setor e chegue com um diagnóstico pronto. Diga: <em>"Pelo que analisei do balanço e do movimento dos concorrentes, o maior vazamento de P&L de vocês está na retenção. Aqui estão as três alavancas que eu puxaria no meu primeiro trimestre para estancar essa sangria."</em></p>
                <p style="margin: 0 0 15px 0;">Isso muda a dinâmica. Vocês deixam de ser "Avaliador e Avaliado" e passam a ser "Sócios discutindo o futuro do negócio".</p>

                <h2 style="font-size: 1.4em; margin: 25px 0 10px 0; font-weight: 700;">A Pergunta por Trás da Pergunta</h2>
                <p style="margin: 0 0 15px 0;">A Diretoria raramente faz perguntas inocentes. Se eles perguntam sobre um projeto que falhou, não estão avaliando o seu erro operacional. Estão testando a sua <strong>responsabilidade fiduciária</strong> (você culpa o mercado ou assume a falha?), a sua <strong>resiliência</strong> (como você blindou o P&L?) e a sua <strong>gestão de stakeholders</strong> (como você comunicou a má notícia ao seu antigo Conselho?).</p>

                <h2 style="font-size: 1.4em; margin: 25px 0 10px 0; font-weight: 700;">Símbolos de Autoridade: Silêncio e Inquirição</h2>
                <p style="margin: 0 0 15px 0;">Executivos subordinados têm medo do silêncio; eles preenchem qualquer pausa com excesso de palavras. Líderes soberanos usam a pausa estruturada. Ao receber uma pergunta complexa do Chairman, respire, ancore o pensamento e responda de forma cirúrgica. Além disso, a sua entrevista só está ganha quando você passa a fazer perguntas tão difíceis para eles quanto as que eles fazem para você. Pergunte sobre a cultura real, o apetite a risco do fundo e os limites da sua autonomia.</p>

                <p style="margin-top: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; font-size: 0.95em; opacity: 0.9;"><strong style="color: #dcb560;">Conclusão:</strong> Você é um par, porte-se como tal. Entrar em uma sala de Diretoria pedindo permissão para liderar é o caminho mais rápido para a rejeição. Posicione-se como o arquiteto da solução que o acionista precisa, e a cadeira será sua.</p>
            </div>
        `
    },


    {
        id: 2, // Verifique a sequência no seu arquivo
        categoria: "Governança",
        data: "18/04/2026",
        tempoLeitura: "6 min",
        titulo: "Do Comando à Governança: Como Transitar para o Conselho sem Perder Relevância",
        slug: "transicao-executivo-para-conselho-de-administracao",
        resumo: "Mudar para o Board não é aposentadoria, é uma mudança de classe de ativo. Descubra como manter o seu capital político e financeiro fora da operação.",
        imagem: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", 
        conteudo: `
            <div class="artigo-container" style="font-family: 'Inter', sans-serif; line-height: 1.6; color: inherit;">
                <p style="margin: 0 0 10px 0;"><strong>A transição da cadeira de CEO ou Diretor Estatutário para um assento no Conselho de Administração é, muitas vezes, mal interpretada como um "desaceleramento".</strong> No alto escalão, o executivo de elite compreende que esta não é uma saída, mas sim uma mudança de classe de ativo: você deixa de ser um operador de P&L para se tornar um gestor de riscos e oportunidades fiduciárias.</p>
                
                <p style="margin: 0 0 10px 0;">O maior erro é acreditar que a relevância vem da carga horária. No Conselho, a sua relevância é medida pela densidade da sua visão e pela capacidade de proteger o capital do acionista.</p>

                <h2 style="font-size: 1.4em; margin: 25px 0 5px 0; font-weight: 700;">A Falácia da Aposentadoria</h2>
                <p style="margin: 0 0 10px 0;">O estigma de que o Conselheiro é um executivo em repouso morre no momento em que a primeira crise de governança bate à porta. Para evitar a percepção de "aposentadoria", o seu posicionamento deve ser focado em Autoridade Técnica e Liderança de Pensamento.</p>

                <div style="border-left: 3px solid #dcb560; background-color: rgba(255,255,255,0.05); padding: 15px; margin: 15px 0; font-style: italic; font-size: 1em;">
                    "O Conselheiro moderno é um especialista em antecipar cisnes negros e em garantir que a estratégia esteja alinhada com os interesses de longo prazo. É governança, não descanso."
                </div>

                <h2 style="font-size: 1.4em; margin: 25px 0 5px 0; font-weight: 700;">Manutenção da Relevância Financeira</h2>
                <p style="margin: 0 0 10px 0;">A pergunta de ouro é: "Como substituir os salários agressivos do C-Level?". A resposta está na diversificação. O Conselheiro de sucesso opera em três ou quatro frentes simultâneas. O segredo não está no fee mensal, mas na negociação estratégica de participações e bónus por performance em reestruturações ou M&A.</p>

                <h2 style="font-size: 1.4em; margin: 25px 0 5px 0; font-weight: 700;">O Salto Mental: Do "Como" para o "O Quê"</h2>
                <p style="margin: 0 0 10px 0;">Para sentar no Board com autoridade, você precisa de "matar" o operador dentro de si. Se você continua a falar de processos operacionais, você ainda é um gerente. Se fala de alocação de capital e gestão de riscos macro, você é um Conselheiro. O Conselho não contrata quem quer ensinar a fazer; contrata quem sabe questionar se o que está sendo feito blinda o futuro da companhia.</p>

                <p style="margin: 20px 0 0 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;"><strong>Conclusão:</strong> Assumir uma cadeira no Conselho é o teste final da sua marca pessoal. É o momento em que você prova ao mercado que a sua inteligência é independente do seu crachá. A relevância não se perde na saída da operação; ela é amplificada quando você se torna o guardião da longevidade orgânica da organização.</p>
            </div>
        `
    }
];
