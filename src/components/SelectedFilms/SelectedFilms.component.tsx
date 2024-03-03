import { isMobile } from "@/global/isMobile/isMobile";

import { ISelectedFilms } from "@/interfaces/ISelectedFilms.interface";

import { SelectedFilmsMobile } from "@/components/SelectedFilms/SelectedFilmsMobile/SelectedFilmsMobile.component";
import { SelectedFilmsWeb } from "@/components/SelectedFilms/SelectedFilmsWeb/SelectedFilmsWeb.component";

export default function SelectedFilmsComponent({
  loading,
  selectedFilms,
  handleQuantityChange,
  prices,
  handleRemoveFilmId,
  handleRedirectRouter,
}: Readonly<ISelectedFilms>) {
  return isMobile() ? (
    <SelectedFilmsMobile
      loading={loading}
      selectedFilms={selectedFilms}
      handleQuantityChange={handleQuantityChange}
      prices={prices}
      handleRemoveFilmId={handleRemoveFilmId}
      handleRedirectRouter={handleRedirectRouter}
    />
  ) : (
    <SelectedFilmsWeb
      loading={loading}
      selectedFilms={selectedFilms}
      handleQuantityChange={handleQuantityChange}
      prices={prices}
      handleRemoveFilmId={handleRemoveFilmId}
      handleRedirectRouter={handleRedirectRouter}
    />
  );
}
