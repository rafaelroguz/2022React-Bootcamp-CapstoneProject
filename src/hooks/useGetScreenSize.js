import baseScreenSizes from "styles/screenSizes";
import useGetWindowSize from "./useGetWindowSize";

const useGetScreenSize = () => {
  const { width } = useGetWindowSize();

  const { mobile, tablet, laptop, desktop } = baseScreenSizes;

  if (width <= mobile) {
    return { isMobile: true };
  }

  if (width <= tablet) {
    return { isTablet: true };
  }

  if (width <= laptop) {
    return { isLaptop: true };
  }

  if (width <= desktop) {
    return { isDesktop: true };
  }

  return { isDesktopXL: true };
};

export default useGetScreenSize;
