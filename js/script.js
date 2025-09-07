// Função para ser chamada no submit do formulário
function realizarAgendamento() {
  // Pega os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data-agendamento").value;
  const hora = document.getElementById("hora-agendamento").value;

  // Formata a data para o padrão brasileiro (dd/mm/yyyy)
  const dataFormatada = new Date(data).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  // Monta a mensagem de confirmação
  const mensagem = `Olá, ${nome}! Seu cadastro foi realizado com sucesso.
    
Agendamento de "${servico}" para o dia ${dataFormatada} às ${hora} confirmado.`;

  // Exibe a mensagem para o usuário
  alert(mensagem);
}
