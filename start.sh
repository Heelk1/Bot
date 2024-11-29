
#!/bin/bash
CYAN='\033[1;36m'
YELLOW='\033[1;33m'
GREEN='\033[1;32m'
MAGENTA='\033[1;35m'
RED='\033[1;31m'
RESET='\033[0m'

while :
do
    # Exibir cabeçalho estilizado
    echo "${MAGENTA}======================================${RESET}"
    echo "${CYAN}           M O M O A Y A S E          ${RESET}"
    echo "${MAGENTA}======================================${RESET}"
    echo "${GREEN}Auto reconexão ativada para prevenção de quedas..${RESET}"
    
    echo "\nEscolha uma opção:"
    echo "${YELLOW}1 - Iniciar QR${RESET}"
    echo "${YELLOW}2 - Iniciar Code${RESET}"
    echo "${YELLOW}3 - Informações do Criador${RESET}"
    echo "${YELLOW}4 - Exibir Status do Sistema${RESET}"
    echo "${YELLOW}5 - Mostrar Versão${RESET}"
    echo "${YELLOW}6 - Ajuda${RESET}"
    echo "${YELLOW}7 - Mostrar IP Público${RESET}"
    echo "${YELLOW}8 - Sair${RESET}"
    echo "${YELLOW}9 - Conectar Novamente${RESET}" # Nova opção
    read -p "Digite o número da opção desejada: " opcao

    case $opcao in
        1)
            echo "${GREEN}Iniciando QR...${RESET}"
            node iniciar.js
            ;;
        2)
            echo "${GREEN}Iniciando Code...${RESET}"
            node iniciar2.js
            ;;
        3)
            # Exibir informações do criador
            echo "${MAGENTA}======================================${RESET}"
            echo "${YELLOW}         Informações do Criador:     ${RESET}"
            echo "${MAGENTA}======================================${RESET}"
            echo "${YELLOW}Nome: Zerophoenix${RESET}"
            echo "${YELLOW}Instagram: @Zerophoenix_kkgr${RESET}"
            echo "${YELLOW}Contato: +55 19 98260-7241${RESET}"
            echo "${YELLOW}Agradecemos por usar a Momo ayase!${RESET}"
            echo "${YELLOW}Crédito pela conexão do bot: ẉa.me/Dīego Bryan.${RESET}"
            echo "${MAGENTA}======================================${RESET}"
            ;;
        4)
            # Exibir status do sistema (exemplo fictício)
            echo "${GREEN}Exibindo Status do Sistema...${RESET}"
            echo "Sistema operacional: $(uname)"
            echo "Arquitetura: $(uname -m)"
            echo "Tempo de atividade: $(uptime -p)"
            ;;
        5)
            # Mostrar versão do software
            echo "${GREEN}Versão da momo ayase: 1.0.0${RESET}"
            ;;
        6)
            # Ajuda
            echo "${MAGENTA}======================================${RESET}"
            echo "${YELLOW}             Ajuda                  ${RESET}"
            echo "${MAGENTA}======================================${RESET}"
            echo "${YELLOW}Este script oferece as seguintes opções:${RESET}"
            echo "${YELLOW}1 - Iniciar QR: Inicia o serviço QR.${RESET}"
            echo "${YELLOW}2 - Iniciar Code: Inicia o serviço Code.${RESET}"
            echo "${YELLOW}3 - Informações do Criador: Mostra informações sobre o criador.${RESET}"
            echo "${YELLOW}4 - Exibir Status do Sistema: Mostra o status atual do sistema.${RESET}"
            echo "${YELLOW}5 - Mostrar Versão: Exibe a versão atual do software.${RESET}"
            echo "${YELLOW}6 - Ajuda: Mostra esta mensagem de ajuda.${RESET}"
            echo "${YELLOW}7 - Mostrar IP Público: Exibe seu endereço IP.${RESET}"
            echo "${YELLOW}8 - Sair: Encerra o script.${RESET}"
            echo "${YELLOW}9 - Conectar Novamente: Reinicia o serviço desconectado.${RESET}" # Nova descrição
            echo "${MAGENTA}======================================${RESET}"
            ;;
        7)
            # Mostrar IP público
            echo "${GREEN}Seu endereço IP público é: ${RESET}$(curl -s ifconfig.me)"
            ;;
        8)
            echo "${GREEN}Saindo...${RESET}"
            exit 0
            ;;
        9)
            echo "${GREEN}Reconectando...${RESET}"
            node iniciar2.js
            # Aqui você pode chamar o script ou comando que faz a reconexão
            # Por exemplo, se fosse um script de reconexão:
            # ./reconectar.sh
            ;;
        *)
            echo "${RED}Opção inválida! Tente novamente.${RESET}"
            ;;
    esac

    sleep 1
done