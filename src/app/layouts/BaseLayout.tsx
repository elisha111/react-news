import { useTheme } from "@/app/providers/ThemeProvider";
import { Main } from "@/pages/home";
import { Header } from "@/widgets/header";

const BaseLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};

export default BaseLayout;
