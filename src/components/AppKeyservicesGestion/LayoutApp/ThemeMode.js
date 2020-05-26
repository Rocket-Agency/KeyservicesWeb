import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

function ContrasteMode({ isDark, setIsDark }) {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        height: 100vh;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}
    >
      <h1>Hello {isDark ? "Dark" : "Light"} Mode</h1>
      <h2>We will make some magic happen!</h2>
      <button
        css={css`
          margin-top: 30px;
          border: 2px solid ${theme.buttonBorder};
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 14px 28px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Change to {isDark ? "light" : "dark"} mode
      </button>
    </div>
  );
}

export default ContrasteMode;