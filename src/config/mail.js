export default {
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "b2385c213441f8",
    pass: "c13398c4d83f38"
  },
  default: {
    from: "Equipe GoBarber <noreply@gobarber.com>"
  }
};

/**
 * Serviços para envio de email:
 * Amazon SES, Mailgun, Sparkpost...
 * Usaremos o Mailtrap, funciona somente para o ambiente de desenvolvimento.
 * Quando a aplicação for online, usaremos uma das citadas acima.
 */
