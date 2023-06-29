package patrimoniumsenai.apipatrimonium.asset;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import patrimoniumsenai.apipatrimonium.area.Area;
import patrimoniumsenai.apipatrimonium.category.Category;

public record CreateAssetDTO(
        @NotBlank
        String name_asset,
        @NotBlank
        @Pattern(regexp = "\\d{9}")
        String account_code,
        @NotNull
        int amount,
        @NotBlank
        String registration_date,
        @NotNull
        Category category,
        @NotNull
        Area area) {
}
