import { isMobile } from "@/global/isMobile/isMobile";
import { SelectedFilmsMobile } from "@/components/SelectedFilms/SelectedFilmsMobile/SelectedFilmsMobile.component";
import { SelectedFilmsWeb } from "@/components/SelectedFilms/SelectedFilmsWeb/SelectedFilmsWeb.component";

export default function SelectedFilmsComponent({
  selectedFilms,
  handleQuantityChange,
  prices,
  handleRemoveFilmId,
  handleRedirectRouter,
}: Readonly<any>) {
  return isMobile() ? (
    <SelectedFilmsMobile
      selectedFilms={selectedFilms}
      handleQuantityChange={handleQuantityChange}
      prices={prices}
      handleRemoveFilmId={handleRemoveFilmId}
      handleRedirectRouter={handleRedirectRouter}
    />
  ) : (
    <SelectedFilmsWeb
      selectedFilms={selectedFilms}
      handleQuantityChange={handleQuantityChange}
      prices={prices}
      handleRemoveFilmId={handleRemoveFilmId}
      handleRedirectRouter={handleRedirectRouter}
    />
  );
}
