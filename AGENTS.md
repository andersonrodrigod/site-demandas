# Instruções para manutenção do painel

Este é um painel pessoal de Anderson para leitura pelo gestor. O usuário quer que o Codex mantenha o conteúdo por prompts, sem formulários de edição no site.

- Abra GUIA.txt para entender o fluxo e a estrutura.
- Conteúdo: dados.js. Visual: painel.css. Renderização: painel.js. Entrada: central_demandas_prototipo.html.
- Preserve central_demandas_original.html como cópia do protótipo.
- Não invente demandas, avanços, percentuais, responsáveis, resultados ou prazos. Ausência de informação deve ficar explícita.
- Ao receber um relato de atualização, altere o projeto correspondente, próximos passos, resumo executivo e updatedAt quando aplicável. Use a data local de America/Sao_Paulo.
- Registre em updates apenas avanços que o usuário relatou. Formato: {date: 'AAAA-MM-DD', projectId: 'id', title: 'Título', description: 'Descrição'}.
- Marcos: {date: 'AAAA-MM-DD', projectId: 'id', title: 'Título', description: 'Descrição'}.
- IDs de projetos devem ser únicos. Preserve IDs usados por marcos e histórico.
- Status suportados: Programado, Em andamento, Em planejamento, Concluído. Prioridade: Máxima ou Regular.
- Se a prioridade mudar, mantenha o destaque e a visão geral coerentes com os dados.
- A interface é somente leitura; filtros e busca não devem gravar dados. Não introduza localStorage como fonte de conteúdo.
- Valide a sintaxe com node --check dados.js e node --check painel.js. Confira navegação, filtros e detalhes no navegador quando alterar comportamento.
- O painel é local. Não diga que alterações já estão publicadas sem efetivamente atualizar e verificar a hospedagem.

## Estrutura atual: Next.js e cena 3D
- A aplicação principal agora está em app/. O conteúdo principal passou a content/painel.json; dados.js pertence à versão HTML preservada.
- app/dashboard.js contém a interface; app/research-scene.js contém a maquete original Three.js/React Three Fiber; app/globals.css contém estilos.
- O usuário aprovou a expansão: o campus representa cinco centros — pesquisa, complicacoes, partos, escuta e chamados. Configuração espacial e identidade: app/centers.js.
- Atualizações por prompt devem mudar content/painel.json, sem inventar fatos. As cinco frentes aparecem no mapa e na aba Frentes.
- Compile com npm run build. O modo npm run start exige nova compilação e reinício após alterações. Para iteração, prefira npm run dev.
- Verifique em navegador clique no prédio, zoom, giro, câmera inicial, pausa/retomada, alternância entre mapa e consulta em texto e largura móvel.
- Modelos e personagens são ilustrativos. Não converter suas quantidades ou movimentos em métricas de trabalho reais.

- Escuta ativa foi informada pelo usuário como pesquisa com prestadores, vendedores e fornecedores. Seu status é A detalhar porque o andamento não foi informado; preserve essa distinção.
- A estrutura e o conteúdo de novas demandas ainda serão decididos com o usuário. Não introduza formulários ou registros fictícios.

## Ambiente e controles aprovados
- O usuário pediu árvores/jardins, estacionamento, carros circulando e voltando às vagas e ambulância com nome e logo Hapvida. Implementação em app/traffic.js e paisagismo em app/research-scene.js.
- Mouse: esquerdo PAN (arrastar), direito ROTATE (girar), meio/scroll DOLLY (zoom). Preserve essa preferência explícita.
- Pausa/retomada deve controlar todos os movimentos. Nunca apresentar trânsito ilustrativo como atendimento ou operação real.
- Logotipo local da ambulância em public/brands/hapvida.png, origem no site oficial registrada em GUIA.txt.

## GitHub Pages
- Workflow em .github/workflows/pages.yml: push master ou execução manual; publica apenas out/.
- Exportação condicional STATIC_EXPORT=true; NEXT_PUBLIC_BASE_PATH deve ser aplicado também a assets públicos carregados diretamente no Three.js.
- Modo local continua compatível com next start. Não publicar conteúdo sem destino autorizado pelo usuário.

