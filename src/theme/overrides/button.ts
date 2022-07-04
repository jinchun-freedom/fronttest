// ** MUI Imports

const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        contained: {
          background:
            "radial-gradient(84.9% 100% at 50% 0%, #8F00FF 0%, #532BC5 100%)",
          textTransform: "inherit",
        },
      },
    },
  };
};

export default Button;
