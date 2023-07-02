package patrimoniumsenai.apipatrimonium.asset;

import jakarta.validation.constraints.NotNull;
import patrimoniumsenai.apipatrimonium.area.Area;
import patrimoniumsenai.apipatrimonium.category.Category;

public record UpdateAssetDTO(
        @NotNull
        Long id_asset,
        String name_asset,
        String account_code,
        int amount,
        String registration_date,
        Category category,
        Area area) {
}
