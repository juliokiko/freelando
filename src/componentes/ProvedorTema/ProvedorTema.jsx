import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "",
    atencao: "",
    focos: "",

    primarias: {
      a: "#5754ed",
      b: "",
      c: "",
    },
    secundarias: {
      a: "#ebeaf9",
      b: "",
      c: "",
    },
    neutras: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  espacamentos: {
    s: "16px",
    l: "32px",
  },
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
