package patrimoniumsenai.apipatrimonium.asset;

import patrimoniumsenai.apipatrimonium.area.Area;
import patrimoniumsenai.apipatrimonium.category.Category;

public record ReadAssetDTO(Long id_asset, String name_asset, String account_code, int amount,
                                        String registration_date, Category category, Area area) {

    public ReadAssetDTO(Asset asset){
        this(asset.getId_asset(), asset.getName_asset(), asset.getAccount_code(), asset.getAmount(),
                asset.getRegistration_date(), asset.getCategory(), asset.getArea());
    }

}
